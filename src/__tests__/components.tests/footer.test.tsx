import { Footer } from '@/components/Footer/Footer'
import { render, screen } from '@testing-library/react'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the footer component has the correct content', () => {
	it('Should have the correct text and a link', () => {
		render(<Footer />)

        expect(screen.getByText(/desenvolvido por/i)).toBeVisible()
        expect(screen.getByRole('link', { name: /edilan ribeiro/i })).toHaveAttribute('href', 'https://github.com/edilan-ribeiro')
	})
})
