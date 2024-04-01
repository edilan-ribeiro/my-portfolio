import { render, screen } from '@testing-library/react'
import { About } from '@/components/About/About'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the about component has the correct content', () => {
	beforeEach(() => {
		render(<About />)
	})

	it('Should render the correct title', async () => {
		const aboutTitle = await screen.findByRole('heading', { name: /sobre mim/i })

		expect(aboutTitle).toBeVisible()
	})

	it('Should render the correct image', async () => {
		const selfieImage = await screen.findByRole('img', { name: /selfie de edilan ribeiro/i })

		expect(selfieImage).toBeVisible()
	})

	it('Should render the correct paragraph text', async () => {
		const aboutParagraphs = [
			'Apaixonado por tecnologia desde cedo me formei em Redes de Computadores mas fugi da área, mil anos depois decidi percorrer a carreira de desenvolvedor e aqui estamos 🤗',
			'Como desenvolvedor estou sempre buscando conhecimento através novos desafios para aprimorar minhas habilidades afim de entregar as melhores soluções possíveis.👨‍💻',
			'Como todo bom nerd, nas horas vagas aproveito para jogar, ver filmes, series, animes🤓',
			'Quando chega a hora de tocar a grama (sair do pc) gosto de andar de moto, patinar no gelo, fazer bolo e também servir de travesseiro para o gato 🐈',
		]

		for (const paragraph of aboutParagraphs) {
			const paragraphText = await screen.findByText(paragraph)
			expect(paragraphText).toBeVisible()
		}
	})

	it('Should render the resume link', async () => {
		const resumeLink = await screen.findByRole('link', { name: /ver currículo/i })

		expect(resumeLink).toHaveAttribute(
			'href',
			'https://drive.google.com/file/d/1uj6Nb_3B8N5eXHI6QzRZIYoYz5zZBn2D/view?usp=drive_link'
		)
		
		expect(resumeLink).toBeVisible()
	})
})
