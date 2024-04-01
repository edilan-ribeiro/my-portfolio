import { Socials } from './Socials/Socials'
import heroStyles from './hero.module.scss'
import { FaChevronDown } from 'react-icons/fa'
import fallbackImage from '@/assets/hero/clouds-bg.jpg'

export const Hero = () => {
	return (
		<section className={heroStyles.hero} id='hero'>
			<div className={heroStyles.heroBackground}>
				<video autoPlay muted loop poster={fallbackImage.src} data-testid='hero-video'>
					<source
						src='https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Watching-the-Universe-Blue.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
			<div className={heroStyles.contentContainer}>
				<div className={heroStyles.heroContent}>
					<h1>Edilan Ribeiro</h1>
					<h2>Desenvolvedor Full Stack</h2>

					<Socials />
				</div>
			</div>
			<a href='#about' className={heroStyles.scrollIndicator} aria-label='ir para a próxima sessão'>
				<FaChevronDown />
			</a>
		</section>
	)
}
