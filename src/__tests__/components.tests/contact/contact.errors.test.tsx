import { Contact } from "@/components/Contact/Contact"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

vi.mock('framer-motion', () => ({
	motion: {
		div: 'div',
	},
}))

describe('Ensure the contact form errors are being displayed when user inputs fail to meet the requirements', () => {
	beforeEach(() => {
		render(<Contact />)
	})

	it('Should display field errors if the form is not filled', async () => {
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		await userEvent.click(submitButton)

		const nameError = await screen.findByText(/Por favor, preencha um nome/i)
		const emailError = await screen.findByText(/Por favor, informe um email/i)
		const messageError = await screen.findByText(/Por favor, adicione uma mensagem/i)

		expect(nameError).toBeVisible()
		expect(emailError).toBeVisible()
		expect(messageError).toBeVisible()
	})

	it('Should display field errors if the form is filled with information too short or wrong email', async () => {
		const nameInput = screen.getByRole('textbox', { name: /nome/i })
		const emailInput = screen.getByRole('textbox', { name: /email/i })
		const messageInput = screen.getByRole('textbox', { name: /mensagem/i })
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		await userEvent.type(nameInput, 'ed')
		await userEvent.type(emailInput, 'testingMAIL@notvalid')
		await userEvent.type(messageInput, 'lorem?')
		await userEvent.click(submitButton)

		const nameError = await screen.findByText(/Nome muito curto, utilize ao menos 4 caracteres/i)
		const emailError = await screen.findByText(/Formato de email inválido/i)
		const messageError = await screen.findByText(/A mensagem deve ter pelo menos 10 caracteres/i)

		expect(nameError).toBeVisible()
		expect(emailError).toBeVisible()
		expect(messageError).toBeVisible()
	})

	it('Should display field errors if the user disabled html validation and the form is filled with information too big', async () => {
		const nameInput = screen.getByRole('textbox', { name: /nome/i })
		const emailInput = screen.getByRole('textbox', { name: /email/i })
		const messageInput = screen.getByRole('textbox', { name: /mensagem/i })
		const submitButton = screen.getByRole('button', { name: /enviar/i })

		nameInput.removeAttribute('maxLength')
		emailInput.removeAttribute('maxLength')
		messageInput.removeAttribute('maxLength')

		await userEvent.type(nameInput, 'edilan primeiro do meu nome e rei dos gatos')
		await userEvent.type(
			emailInput,
			'kafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafogkafog@mailinator.com'
		)
		await userEvent.type(
			messageInput,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum, sed animi incidunt, nesciunt accusamus a placeat beatae alias ullam illo explicabo dolorum quasi amet labore corporis nisi, soluta in?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos rerum, sed animi incidunt, nesciunt accusamus a placeat beatae alias ullam illo explicabo dolorum quasi amet labore corporis nisi, soluta in?'
		)

		await userEvent.click(submitButton)

		const nameError = await screen.findByText(/Nome muito grande, deve ter menos de 40 caracteres/i)
		const emailError = await screen.findByText(/Email muito grande, deve ter menos de 130 caracteres/i)
		const messageError = await screen.findByText(/A mensagem pode ter no máximo 400 caracteres/i)

		expect(nameError).toBeVisible()
		expect(emailError).toBeVisible()
		expect(messageError).toBeVisible()
	})
})
