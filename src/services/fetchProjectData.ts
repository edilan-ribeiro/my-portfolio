import { externalProjects } from '@/data/externalProjects'

interface projectData {
	name: string
	description: string
	topics: string[]
	homepage: string
	html_url: string
	id: number
	created_at: string
	cover?: string
	techs?: string[]
	showCode?: boolean
}

const featuredProjects = [
	'barber-system',
	'space-tourism',
	'hydra-project',
	'pokemon-project',
	'rh-consultoria',
]

export async function fetchProjectData(): Promise<projectData[]> {
	let projectData: projectData[] = []

	


	try {
		const url = `https://api.github.com/users/edilan-ribeiro/repos`
		const token = process.env.GITHUB_TOKEN

		const dataCacheTime = 60 * 60 * 24 * 25 // 25 days to revalidate cache

		const getData = await fetch(url, { headers: { Authorization: `token ${token}` }, next: { revalidate: dataCacheTime } })

		projectData = await getData.json()
	} catch (error) {
		console.log(`Ocorreu um erro ${error}`)
	}

	let filteredProjectData: projectData[] = []

	if (projectData.length > 0) {
		const sortedProjectData = projectData.sort(
			(a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
		)

		filteredProjectData = sortedProjectData.filter((project) =>
			project.topics.includes('portfolio-project')
		)

		let reorderProjects = filteredProjectData.splice(2, 2)

		filteredProjectData = featuredProjects
	.map((projectName) =>
		projectData.find((project) => project.name === projectName)
	)
	.filter((project): project is projectData => Boolean(project))

		filteredProjectData = [...filteredProjectData, ...reorderProjects]

		filteredProjectData = filteredProjectData.slice(0, 5)
	}

	return [...externalProjects,...filteredProjectData]
	
}
