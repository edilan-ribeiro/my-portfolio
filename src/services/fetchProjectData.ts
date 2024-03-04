export async function fetchProjectData() {
	let projectData

	try {
		const url = `https://api.github.com/users/edilan-ribeiro/repos`

		const dataCacheTime = 60 * 60 * 24 * 25 // 25 days to revalidate cache

		const getData = await fetch(url, { next: { revalidate: 10 } })

		projectData = await getData.json()

	} catch (error) {
		console.log(`Ocorreu um erro ${error}`)
	}

	const filteredProjectData = projectData.filter((projects: { topics: string | string[] } ) => projects.topics.includes('portfolio-project'))
    
	return filteredProjectData
}
