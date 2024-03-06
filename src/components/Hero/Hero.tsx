import { Socials } from './Socials/Socials'
import heroStyles from './hero.module.scss'

export const Hero = () => {
	return (
		<div className={heroStyles.contentContainer}>
			<div className={heroStyles.heroContent}>
				<h1>Edilan Ribeiro</h1>
				<h2>Desenvolvedor Fullstack</h2>

				<Socials />
			</div>
		</div>
	)
}
