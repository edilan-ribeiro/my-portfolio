import { fetchProjectData } from '@/services/fetchProjectData'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import Image from 'next/image'
import { IoIosLink } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import projectsStyles from './projects.module.scss'
import { formatName } from './helpers/formatName'
import { TechStack } from './TechStack/TechStack'
import { AnimatedDiv } from '../AnimatedDiv/AnimateDiv'

const projectCardVariants = {
	initial: {
		opacity: 0,
	},
	whileInView: {
		opacity: 1,
	},
}

export async function Projects() {
	const projectsData = await fetchProjectData()

	return (
		<section className={projectsStyles.projects} id='projects'>
			<div className={projectsStyles.contentContainer}>
				<SectionTitle sectionTitle='Meus projetos' />

				<div className={projectsStyles.projectsWrapper}>
					{projectsData.map((project, index) => (
						<AnimatedDiv
							key={project.id}
							className={projectsStyles.projectsCard}
							initial='initial'
							whileInView='whileInView'
							transition={{
								duration: 0.4,
								delay: index * 0.2,
								type: 'tween',
							}}
							variants={projectCardVariants}
							viewport={{ once: true, margin: '-150px 0px 0px 0px' }}
							title={`${project.name} card`}
						>
							<div className={projectsStyles.cardImage}>
								<a href={project.html_url} target='_blank'>
									<Image
										src={`https://raw.githubusercontent.com/edilan-ribeiro/${project.name}/main/public/cover.png`}
										alt={formatName(project.name)}
										fill
										style={{
											objectFit: 'cover',
											objectPosition: 'left top',
										}}
									/>
								</a>
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
										<a
											href={project.homepage}
											target='_blank'
										>
											<IoIosLink /> <p>ver online</p>
										</a>
									)}
								</div>
							</div>
						</AnimatedDiv>
					))}
				</div>
				<div className={projectsStyles.moreProjectsBtn}>
					<a href='https://github.com/edilan-ribeiro?tab=repositories' target='_blank'>
						Ver mais projetos
					</a>
				</div>
			</div>
		</section>
	)
}
