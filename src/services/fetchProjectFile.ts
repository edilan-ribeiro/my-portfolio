interface ProjectFileData {
	content: string
}

export async function fetchProjectFile(projectName: string): Promise<ProjectFileData> {
	let projectFile: ProjectFileData

	try {
		const url = `https://api.github.com/repos/edilan-ribeiro/${projectName}/contents/README.md`
		const token = process.env.GITHUB_TOKEN

		const fileDataCacheTime = 60 * 60 * 24 * 25 // 25 days to revalidate cache

		const getFileData = await fetch(url, { headers: { Authorization: `token ${token}` }, next: { revalidate: fileDataCacheTime } })

		projectFile = await getFileData.json()
	} catch (error) {
		console.log(`Ocorreu um erro ao buscar o README: ${error}`)
		throw error
	}

	return projectFile
}
