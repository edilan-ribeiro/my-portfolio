import Image from 'next/image'
import selfie from '@/assets/about/selfie-about.png'
import aboutStyles from './about.module.scss'
import { SectionTitle } from '../SectionTitle/SectionTitle'

export const About = () => {
	return (
		<div className={aboutStyles.contentContainer}>
			<SectionTitle sectionTitle='Sobre mim' />

			<div className={aboutStyles.infoWrap}>
				<div className={aboutStyles.selfieSide}>
					<div className={aboutStyles.selfie}>
						<Image
							src={selfie}
							alt='selfie de edilan ribeiro'
							width={0}
							height={0}
							style={{ width: '100%', height: 'auto', borderRadius: '25px' }}
						/>
					</div>
				</div>

				<div className={aboutStyles.textSide}>
					<h3>
						Olá,
						<br />
						Meu nome é Edilan, sou desenvolvedor fullstack!
					</h3>
					<p>
						Apaixonado por tecnologia desde cedo me formei em Redes de Computadores
						mas fugi da área, mil anos depois decidi percorrer a carreira de
						desenvolvedor e aqui estamos 🤗
					</p>
					<p>
						Como desenvolvedor estou sempre buscando conhecimento através novos
						desafios para aprimorar minhas habilidades afim de entregar as melhores
						soluções possíveis.👨‍💻
					</p>

					<p>
						Como todo bom nerd, nas horas vagas aproveito para jogar, ver filmes,
						series, animes🤓
					</p>
					<p>
						Quando chega a hora de tocar a grama (sair do pc) gosto de andar de
						moto, patinar no gelo, fazer bolo e também servir de travesseiro para o
						gato 🐈
					</p>

					{/* TODO: BUTTON COMPONENT 
					<button>
						<a href='000' />
						meu currículo
					</button>
					TODO: BUTTON COMPONENT */}
				</div>
			</div>
		</div>
	)
}
