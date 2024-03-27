import { render, screen } from '@testing-library/react'
import { About } from '@/components/About/About'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the about component has the correct content', () => {
	it('Should render the correct title, text, image and the resume link', async () => {
		render(<About />)

		const aboutTitle = await screen.findByRole('heading', { name: /sobre mim/i })

		const selfieImage = await screen.findByRole('img', { name: /selfie de edilan ribeiro/i })

		const paragraph = await screen.findByText(
			/Apaixonado por tecnologia desde cedo me formei em Redes de Computadores mas fugi da área, mil anos depois decidi percorrer a carreira de desenvolvedor e aqui estamos/i
		)

		const resumeLink = await screen.findByRole('link', { name: /ver currículo/i })

		expect(resumeLink).toHaveAttribute(
			'href',
			'https://drive.google.com/file/d/1uj6Nb_3B8N5eXHI6QzRZIYoYz5zZBn2D/view?usp=drive_link'
		)

		expect(aboutTitle).toBeVisible()

		expect(selfieImage).toBeVisible()

		expect(paragraph).toBeVisible()

		expect(resumeLink).toBeVisible()
	})
})
