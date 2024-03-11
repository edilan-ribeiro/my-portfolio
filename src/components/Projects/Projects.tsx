import { fetchProjectData } from '@/services/fetchProjectData'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Image from 'next/image'
import { IoIosLink } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import projectsStyles from './projects.module.scss'
import { formatName } from './helpers/formatName'
import { TechStack } from './TechStack/TechStack'

export async function Projects() {
	const projectsData = await fetchProjectData()	

	//TODO: BOTÃO AO FINAL PARA O LINK GERAL DE REPOS

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

								<TechStack projects={project.name} />
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
