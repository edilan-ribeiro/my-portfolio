import { Contact } from '@/components/Contact/Contact'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the contact component is working properly', () => {
	beforeEach(() => {
		render(<Contact />)
	})

	it('Should have the correct content when the form is rendered', () => {
		const contactSectionTitle = screen.getByRole('heading', { name: /contato/i })
		const contactFormTitle = screen.getByRole('heading', { name: /Vamos trabalhar juntos!/i })
		const nameInput = screen.getByRole('textbox', { name: /nome/i })
		const emailInput = screen.getByRole('textbox', { name: /email/i })
		const messageInput = screen.getByRole('textbox', { name: /mensagem/i })
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		expect(contactSectionTitle).toBeVisible()
		expect(contactFormTitle).toBeVisible()
		expect(nameInput).toBeVisible()
		expect(emailInput).toBeVisible()
		expect(messageInput).toBeVisible()
		expect(submitButton).toBeVisible()
	})

	it('Should send a message correctly and get a response with status ok', async () => {
		const nameInput = screen.getByRole('textbox', { name: /nome/i })
		const emailInput = screen.getByRole('textbox', { name: /email/i })
		const messageInput = screen.getByRole('textbox', { name: /mensagem/i })
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		await userEvent.type(nameInput, 'edilan ribeiro')
		await userEvent.type(emailInput, 'emaildeteste@hotmail.com')
		await userEvent.type(messageInput, 'Assunto de extrema insignificância pra confirmar que funciona!')
		await userEvent.click(submitButton)

		expect(await screen.findByText(/Enviado com sucesso/i)).toBeVisible()
	})

	it('Should send a message correctly and get a response with status failure', async () => {
		vi.mock('@hookform/resolvers/zod', () => ({
			zodResolver: () => async (data: any) => ({ values: data, errors: {} }),
		}))

		const nameInput = screen.getByRole('textbox', { name: /nome/i })
		const emailInput = screen.getByRole('textbox', { name: /email/i })
		const messageInput = screen.getByRole('textbox', { name: /mensagem/i })
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		await userEvent.type(nameInput, 'ed')
		await userEvent.type(emailInput, 'emal.com')
		await userEvent.type(messageInput, 'Assu!')
		await userEvent.click(submitButton)

		expect(await screen.findByText(/Falha no enviar, recarregue a página/i)).toBeVisible()
	})
})
