export function techInformation(fileContent: string) {
	const projectReadme = atob(fileContent)

	const searchTechRegex = /!\[(.*?)\]/g

	const matchingTechs = [...projectReadme.matchAll(searchTechRegex)]

	const techStack: string[] = matchingTechs.map((tech) => tech[1])

	return techStack
}
