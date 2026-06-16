export function techInformation(fileContent?: string) {
	if (!fileContent) {
		return []
	}

	try {
		const projectReadme = atob(fileContent)

		const searchTechRegex = /!\[(.*?)\]/g

		const matchingTechs = [...projectReadme.matchAll(searchTechRegex)]

		return matchingTechs.map((tech) => tech[1])
	} catch {
		return []
	}
}