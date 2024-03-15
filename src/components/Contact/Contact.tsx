'use client'

import { useForm, useWatch } from 'react-hook-form'
import contactStyles from './contact.module.scss'
import { contactFormSchema } from '@/lib/contactFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { useState } from 'react'
import { z } from 'zod'
import { PulseLoader } from 'react-spinners'

export const Contact = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<z.infer<typeof contactFormSchema>>({ resolver: zodResolver(contactFormSchema) })

	const messageSize = useWatch({ control, name: 'message', defaultValue: 'default' })

	const [formSent, setformSent] = useState<boolean | undefined>()
	const [isLoading, setIsLoading] = useState(false)

	async function sendMessage(formData: z.infer<typeof contactFormSchema>) {
		try {
			setIsLoading(true)

			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			const sendMailResult = await response.json()

			if (sendMailResult.data.error === null) {
				setformSent(true)
			} else {
				console.log(sendMailResult.data.error)
				setformSent(false)
			}

			setIsLoading(false)
		} catch (error) {
			setIsLoading(false)
			setformSent(false)
			console.log(`Erro na execução: ${error}`)
		}
	}

	return (
		<div className={contactStyles.contentContainer}>
			<SectionTitle sectionTitle='Contato' />
			<div className={contactStyles.contact}>
				<div className={contactStyles.contactContent}>
					<div className={contactStyles.getInTouch}>
						<h3>Vamos trabalhar juntos!</h3>
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
								maxLength={400}
							/>
							<div className={contactStyles.bottomOptions}>
								{errors.message && (
									<p className={contactStyles.errorMessage}>
										{errors.message.message}
									</p>
								)}
								{messageSize.length > 100 && (
									<p>{messageSize.length}/400</p>
								)}
							</div>
						</div>
					</form>
					<button
						type='submit'
						className={contactStyles.formButton}
						form='contact-form'
						disabled={isLoading || formSent === true || formSent === false}
						data-sent={formSent}
					>
						{isLoading ? (
							<>
								Enviando
								<PulseLoader size={10} color='#ffffffb4' />
							</>
						) : formSent ? (
							'Enviado com sucesso! ✅'
						) : formSent === false ? (
							'Falha no enviar, recarregue a página! ❌'
						) : (
							'Enviar'
						)}
					</button>
				</div>
			</div>
		</div>
	)
}
