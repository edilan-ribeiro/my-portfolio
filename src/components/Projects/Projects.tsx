import { fetchProjectData } from '@/services/fetchProjectData'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Image from 'next/image'
import { IoIosLink } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import projectsStyles from './projects.module.scss'
import { formatName } from './helpers/formatName'

export async function Projects() {
	let projectsData = await fetchProjectData()

	//TODO: ACESSAR README DATA PRA PEGAR A TECH COM REGEX NA BADGE
	//TODO: BOTÃO AO FINAL PARA O LINK GERAL DE REPOS
	//TODO: ADD +2 REPOS

	return (
		<div className={projectsStyles.contentContainer}>
			<SectionTitle sectionTitle='Meus projetos' />

			<div className={projectsStyles.projectsWrapper}>
				{projectsData.map((project) => (
					<div key={project.id} className={projectsStyles.projectsCard}>
						<div className={projectsStyles.cardImage}>
							<Image
								src={`https://raw.githubusercontent.com/edilan-ribeiro/${project.name}/main/public/cover.png`}
								alt={formatName(project.name)}
								fill
								style={{
									objectFit: 'cover',
									objectPosition: 'left top',
								}}
							/>
						</div>

						<div className={projectsStyles.cardInfo}>
							<div className={projectsStyles.cardText}>
								<h3>{formatName(project.name)}</h3>
								<p>{project.description}</p>
								<ul className={projectsStyles.cardTech}>
									<li>tecnologias</li>
									<li>tecnologias2</li>
									<li>tecnologias3</li>
									<li>tecnologias3</li>
									<li>tecnologias3</li>
									<li>tecnologias3</li>
									<li>tecnologias3</li>
								</ul>
							</div>

							<div className={projectsStyles.cardLinks}>
								<a href={project.html_url} target='_blank'>
									<FaGithub /> <p>ver código</p>
								</a>

								{project.homepage.length !== 0 && (
									<a href={project.homepage} target='_blank'>
										<IoIosLink /> <p>ver online</p>
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
