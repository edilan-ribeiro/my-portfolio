export function formatName(projectName: string) {
	const formatedName = projectName.split('-').join(' ')

	return formatedName
}
