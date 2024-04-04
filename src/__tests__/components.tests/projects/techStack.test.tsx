import { TechStack } from '@/components/Projects/TechStack/TechStack'
import { fetchProjectFile } from '@/services/fetchProjectFile'
import { render, screen, within } from '@testing-library/react'

async function resolvedComponent(Component: any, props: { projects: string }) {
	const ComponentResolved = await Component(props)
	return () => ComponentResolved
}

describe('Ensure the api call for the files is working', () => {
	it('Should get a json with the content property from each project readme file', async () => {
		const fetchedMovieFlixFile = await fetchProjectFile('movieflix-api')
		expect(fetchedMovieFlixFile.content).toContain(
			'ZS1iYWRnZSZsb2dvPXN3YWdnZXImbG9nb0NvbG9yPTg1RUEyRCkKCjwvZGl2'
		)

		const fetchedSpaceTourismFile = await fetchProjectFile('space-tourism')
		expect(fetchedSpaceTourismFile.content).toContain(
			'b3Zhw6fDo28gZG8gcm90ZWFtZW50byBwb3IgbWVpbyBkZSBlc3RydXR1cmFz'
		)

		const fetchedBarberSystemFile = await fetchProjectFile('barber-system')
		expect(fetchedBarberSystemFile.content).toContain(
			'cHJvamV0bywgZGl2ZXJnaW5kbyBkYXMgcHLDoXRpY2FzIGNvbnZlbmNpb25h'
		)
	})
})

describe('Ensure the tech stack component can be rendered and has the techs used from a list of projects', () => {
	const projectsName = [
		'movieflix-api',
		'space-tourism',
		'barber-system',
		'pokemon-project',
		'fm-interactive-card',
		'fm-job-listings',
	]

	beforeEach(async () => {
		for (const projectName of projectsName) {
			const ResolvedTechStack = await resolvedComponent(TechStack, {
				projects: projectName,
			})
			render(
				<div data-testid={projectName}>
					<ResolvedTechStack />
				</div>
			)
		}
	})

	it('Should render the correct stack list used on the movieflix api project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'movieflix-api') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'Node.js',
					'Express',
					'Typescript',
					'PostgreSQL',
					'Prisma',
					'Swagger UI',
				])
			}
		})
	})

	it('Should render the correct stack list used on the space tourism project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'space-tourism') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'Next.Js',
					'Typescript',
					'SASS',
					'React',
				])
			}
		})
	})

	it('Should render the correct stack list used on the barber system project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'barber-system') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'Next.js',
					'Tailwind Css',
					'Typescript',
					'PostgreSQL',
					'Prisma',
				])
			}
		})
	})

	it('Should render the correct stack list used on the pokemon project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'pokemon-project') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'React',
					'Vitest',
					'JavaScript',
					'HTML5',
					'Styled Components',
				])
			}
		})
	})

	it('Should render the correct stack list used on the fm interactive card project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'fm-interactive-card') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'Next.Js',
					'Typescript',
					'Styled Components',
				])
			}
		})
	})

	it('Should render the correct stack list used on the fm job listings project', () => {
		projectsName.forEach((projectName) => {
			const listContainer = screen.getByTestId(projectName)
			const { getAllByRole } = within(listContainer)
			const techItem = getAllByRole('listitem')

			if (projectName === 'fm-job-listings') {
				expect(techItem.map((item) => item.textContent)).toEqual([
					'React',
					'JavaScript',
					'HTML5',
					'SASS',
				])
			}
		})
	})
})
