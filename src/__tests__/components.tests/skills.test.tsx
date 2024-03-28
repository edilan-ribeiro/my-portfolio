import { Skills } from "@/components/Skills/Skills"
import { render, screen } from "@testing-library/react"

vi.mock('framer-motion', () => ({
    motion: {
        div: 'div',
    }
}))

describe('Ensure the skills component has the correct content', () => {
    it('Should have the title and skill cards shown correctly', () => {
        render(<Skills />)
        
        const skillsTitle = screen.getByRole('heading', { name: /habilidades/i })

        screen.debug()
    })




})