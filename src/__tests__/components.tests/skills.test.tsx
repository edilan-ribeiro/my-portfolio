import { Skills } from '@/components/Skills/Skills'
import { render, screen } from '@testing-library/react'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the skills component has the correct content', () => {
	beforeEach(() => {
		render(<Skills />)
	})

	it('Should have the title and skill cards shown correctly', () => {
		const skillsTitle = screen.getByRole('heading', { name: /habilidades/i })

		expect(skillsTitle).toBeVisible()
	})

	it('Should have the correct skill cards', () => {
		const skillCards = screen.getAllByTestId('skill-card')

		skillCards.forEach((card) => {
			expect(card).toBeVisible()
		})
	})
})
