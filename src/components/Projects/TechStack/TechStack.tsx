import { fetchProjectFile } from '@/services/fetchProjectFile'
import { techInformation } from '../helpers/techInformation'
import techStyle from './tech-stack.module.scss'

interface TechStackProps {
	projects: string
}

export const TechStack = async ({ projects }: TechStackProps) => {
	const projectFile = await fetchProjectFile(projects)

	return (
		<ul className={techStyle.cardTech}>
			{techInformation(projectFile.content).map((tech) => (
				<li key={tech}>{tech}</li>
			))}
		</ul>
	)
}
