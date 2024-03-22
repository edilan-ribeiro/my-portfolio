import Image from 'next/image'
import selfie from '@/assets/about/selfie-about.png'
import aboutStyles from './about.module.scss'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { AnimatedDiv } from '../AnimatedDiv/AnimateDiv'

const selfieVariants = {
	initial: {
		opacity: 0,
		x: '-150px',
	},
	whileInView: {
		opacity: 1,
		x: '0',
		transition: {
			duration: 0.5,
		},
	},
}

const textVariants = {
	initial: {
		opacity: 0,
		x: '150px',
	},
	whileInView: {
		opacity: 1,
		x: '0',
		transition: {
			duration: 0.5,
		},
	},
}

export const About = () => {
	return (
		<section className={aboutStyles.about} id='about'>
			<div className={aboutStyles.contentContainer}>
				<SectionTitle sectionTitle='Sobre mim' />

				<div className={aboutStyles.infoWrap}>
					<AnimatedDiv
						className={aboutStyles.selfieSide}
						initial='initial'
						whileInView='whileInView'
						variants={selfieVariants}
						viewport={{ once: true, amount: 0.3 }}
					>
						<div className={aboutStyles.selfie}>
							<Image
								src={selfie}
								alt='selfie de edilan ribeiro'
								width={0}
								height={0}
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: '25px',
								}}
							/>
						</div>
					</AnimatedDiv>

					<AnimatedDiv
						className={aboutStyles.textSide}
						initial='initial'
						whileInView='whileInView'
						variants={textVariants}
						viewport={{ once: true, amount: 0.3 }}
					>
						<h3>
							Olá,
							<br />
							Meu nome é Edilan, sou desenvolvedor full stack!
						</h3>
						<p>
							Apaixonado por tecnologia desde cedo me formei em Redes de
							Computadores mas fugi da área, mil anos depois decidi percorrer
							a carreira de desenvolvedor e aqui estamos 🤗
						</p>
						<p>
							Como desenvolvedor estou sempre buscando conhecimento através
							novos desafios para aprimorar minhas habilidades afim de
							entregar as melhores soluções possíveis.👨‍💻
						</p>

						<p>
							Como todo bom nerd, nas horas vagas aproveito para jogar, ver
							filmes, series, animes🤓
						</p>
						<p>
							Quando chega a hora de tocar a grama (sair do pc) gosto de andar
							de moto, patinar no gelo, fazer bolo e também servir de
							travesseiro para o gato 🐈
						</p>

						<div className={aboutStyles.resumeFileBtn}>
							<a href='https://drive.google.com/file/d/1uj6Nb_3B8N5eXHI6QzRZIYoYz5zZBn2D/view?usp=drive_link' target='_blank'>
								Ver Currículo
							</a>
						</div>
					</AnimatedDiv>
				</div>
			</div>
		</section>
	)
}
