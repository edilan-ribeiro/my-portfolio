'use client'
import { useForm } from 'react-hook-form'
import contactStyles from './contact.module.scss'

export const Contact = () => {
	const { register, handleSubmit } = useForm()

	function sendMessage(data: any) {
		console.log(data)
	}

	return (
		<div className={contactStyles.contentContainer}>
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
						</div>
						<div className={contactStyles.formFields}>
							<label htmlFor='email'>Email</label>
							<input
								type='text'
								id='email'
								placeholder='Coloque seu email'
								{...register('email')}
							/>
						</div>
						<div className={contactStyles.formFields}>
							<label htmlFor='message'>Mensagem</label>
							<textarea
								id='message'
								placeholder='Escreva sua mensagem...'
								{...register('message')}
							/>
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
