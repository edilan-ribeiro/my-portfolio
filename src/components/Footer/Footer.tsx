import footerStyles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<p>
				Desenvolvido por{' '}
				<a href='https://github.com/edilan-ribeiro' target='_blank'>
					Edilan Ribeiro
				</a>
			</p>
		</footer>
	)
}
