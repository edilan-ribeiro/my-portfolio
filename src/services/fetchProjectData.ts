interface projectData {
	name: string
	description: string
	topics: string[]
	homepage: string
	html_url: string
	id: number
	created_at: string
}

export async function fetchProjectData(): Promise<projectData[]> {
	let projectData: projectData[] = []

	try {
		const url = `https://api.github.com/users/edilan-ribeiro/repos`

		const dataCacheTime = 60 * 60 * 24 * 25 // 25 days to revalidate cache

		const getData = await fetch(url, { next: { revalidate: dataCacheTime } })

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
	}

	return filteredProjectData
}
