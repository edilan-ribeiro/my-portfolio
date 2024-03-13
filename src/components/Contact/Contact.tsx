'use client'

import { useForm } from 'react-hook-form'
import contactStyles from './contact.module.scss'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SectionTitle } from '../SectionTitle/SectionTitle'

const createContactSchema = z.object({
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

export const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof createContactSchema>>({ resolver: zodResolver(createContactSchema) })

	function sendMessage(data: any) {
		console.log(data)
	}

	return (
		<div className={contactStyles.contentContainer}>
			<SectionTitle sectionTitle='Contato' />
			<div className={contactStyles.contact}>
				<div className={contactStyles.contactContent}>
					<div className={contactStyles.getInTouch}>
						<h3>Vamos trabalhar juntos</h3>
					</div>

					<form
						className={contactStyles.form}
						id='contact-form'
						onSubmit={handleSubmit(sendMessage)}
					>
						<div className={contactStyles.formFields}>
							<label htmlFor='name'>Nome</label>
							<input
								type='text'
								id='name'
								placeholder='Digite seu nome'
								{...register('name')}
							/>
							{errors.name && (
								<p className={contactStyles.errorMessage}>
									{errors.name.message}
								</p>
							)}
						</div>
						<div className={contactStyles.formFields}>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								id='email'
								placeholder='Coloque seu email'
								{...register('email')}
							/>
							{errors.email && (
								<p className={contactStyles.errorMessage}>
									{errors.email.message}
								</p>
							)}
						</div>
						<div
							className={`${contactStyles.formFields} ${contactStyles.messageField}`}
						>
							<label htmlFor='message'>Mensagem</label>
							<textarea
								id='message'
								placeholder='Escreva sua mensagem...'
								{...register('message')}
							/>
							{errors.message && (
								<p className={contactStyles.errorMessage}>
									{errors.message.message}
								</p>
							)}
						</div>
					</form>
					<button type='submit' className={contactStyles.formButton} form='contact-form'>
						Enviar
					</button>
				</div>
			</div>
		</div>
	)
}
