import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, { message: '*Por favor, preencha um nome' })
		.min(4, { message: 'Nome muito curto, utilize ao menos 4 caracteres' })
		.max(40, { message: 'Nome muito grande, deve ter menos de 40 caracteres' }),
	email: z
		.string()
		.min(1, { message: '*Por favor, informe um email' })
		.email({ message: 'Formato de email inválido' })
		.max(130, { message: 'Email muito grande, deve ter menos de 130 caracteres' }),
	message: z
		.string()
		.min(1, { message: '*Por favor, adicione uma mensagem' })
		.min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
		.max(400, { message: 'A mensagem pode ter no máximo 400 caracteres' }),
})
