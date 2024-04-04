import mockFiles from '@/__tests__/.vitest/mocks/mockData/mockFiles.json'
import { techInformation } from '@/components/Projects/helpers/techInformation'

describe('Ensure tech information is being captured correctly', () => {
	it('should return the correct tech information according to the regex', () => {
		const expectedTechNames = [
			['Node.js', 'Express', 'Typescript', 'PostgreSQL', 'Prisma', 'Swagger UI'],
			['Next.js', 'Tailwind Css', 'Typescript', 'PostgreSQL', 'Prisma'],
			['Next.Js', 'Typescript', 'SASS', 'React'],
			['React', 'Vitest', 'JavaScript', 'HTML5', 'Styled Components'],
			['Next.Js', 'Typescript', 'Styled Components'],
			['React', 'JavaScript', 'HTML5', 'SASS'],
		]

		const projectFile = mockFiles.map((file) => file.content)

		projectFile.forEach((file, index) => {
			const techStack = techInformation(file)

			expect(techStack).toEqual(expectedTechNames[index])
		})
	})
})
