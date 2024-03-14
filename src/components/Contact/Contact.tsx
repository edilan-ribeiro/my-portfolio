'use client'

import { useForm } from 'react-hook-form'
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
		formState: { errors },
	} = useForm<z.infer<typeof contactFormSchema>>({ resolver: zodResolver(contactFormSchema) })

	const [formSent, setformSent] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	async function sendMessage(formData: z.infer<typeof contactFormSchema>) {
		try {
			setIsLoading(true)

			await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			setIsLoading(false)
			setformSent(true)
		} catch (error) {
			console.log(`Ocorreu um erro, motivo: ${error}`)
		}
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
					<button
						type='submit'
						className={contactStyles.formButton}
						form='contact-form'
						disabled={isLoading}
					>
						{isLoading ? 'Enviando' : 'Enviar'}
						{isLoading && <PulseLoader size={10} color='#ffffffb4' />}
					</button>
				</div>
			</div>
		</div>
	)
}
