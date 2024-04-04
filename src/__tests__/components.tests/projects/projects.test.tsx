import { Projects } from '@/components/Projects/Projects'
import { fetchProjectData } from '@/services/fetchProjectData'
import { render, screen, within } from '@testing-library/react'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

vi.mock('@/components/Projects/TechStack/TechStack', () => {
	return {
		TechStack: () => null,
	}
})

async function resolvedComponent(Component: any) {
	const ComponentResolved = await Component()
	return () => ComponentResolved
}

describe('Ensure the api call for the repos is working', () => {
	it('Should contain only the repos with the topic portfolio project', async () => {
		const getProjectData = await fetchProjectData()

		getProjectData.forEach((project) => {
			project.topics.forEach((topic) => {
				expect(topic).toContain('portfolio-project')
			})
		})
	})
})

describe('Ensure the projects component has the correct content', async () => {
	beforeEach(async () => {
		const ResolvedTechStack = await resolvedComponent(Projects)
		render(<ResolvedTechStack />)
	})

	it('Should render the correct section title', () => {
		const projectsTitle = screen.getByRole('heading', { name: /projetos/i })

		expect(projectsTitle).toBeVisible()
	})

	it('Should render each project card', () => {
		const projectCards = screen.getAllByTitle(/card/i)

		projectCards.forEach((card) => {
			expect(card).toBeVisible()
		})
	})

	it('Should ensure the cards have the correct project preview images', async () => {
		const expectedImgAltTexts = [
			'barber system',
			'movieflix api',
			'space tourism',
			'pokemon project',
			'fm interactive card',
			'fm job listings',
		]

		const projectCards = screen.getAllByTitle(/card/i)

		projectCards.forEach((card, index) => {
			const image = card.querySelector('img')

			expect(image).toHaveAttribute('alt', expectedImgAltTexts[index])
			expect(image).toBeVisible()
		})
	})

	it('Should ensure the cards have the correct project titles', async () => {
		const expectedTitleTexts = [
			'barber system',
			'movieflix api',
			'space tourism',
			'pokemon project',
			'fm interactive card',
			'fm job listings',
		]

		const projectCards = screen.getAllByTitle(/card/i)

		projectCards.forEach((card, index) => {
			const projectTitle = card.querySelector('h3')

			expect(projectTitle?.textContent).toEqual(expectedTitleTexts[index])
			expect(projectTitle).toBeVisible()
		})
	})

	it('Should ensure the cards have the correct project descriptions', async () => {
		const expectedDescriptions = [
			'Um sistema de agendamento de serviços, cliente escolhe o local, dia e serviço!',
			'Projeto de uma API que trabalha com dados de filmes em um banco de dados.',
			'Projeto sobre um site de turismo espacial! Baseado no desafio do frontend mentor.',
			'Pokemon Project - Mostra dados dados de pokemons!',
			'Página para preenchimento dos dados de pagamento em cartão, baseada no desafio do frontend mentor.',
			'Página para de listagem de vagas com filtragem de itens, baseada no desafio do frontend mentor.',
		]

		const projectCards = screen.getAllByTitle(/card/i)

		projectCards.forEach((card, index) => {
			const projectDescription = card.querySelector('p')

			expect(projectDescription?.textContent).toEqual(expectedDescriptions[index])
			expect(projectDescription).toBeVisible()
		})
	})

	it('Should ensure the cards have the correct project links', async () => {
		const projectCards = screen.getAllByTitle(/card/i)

		projectCards.forEach((card) => {
			const projectLink = card.querySelector('a')
			const repoLinkOptions = within(card).getByText(/ver código/i)

			const { title } = card
			const pureTitle = title.replace(/ card$/, '')

			expect(projectLink).toHaveAttribute('href', `https://github.com/edilan-ribeiro/${pureTitle}`)
			expect(repoLinkOptions).toBeVisible()
		})
	})
})
