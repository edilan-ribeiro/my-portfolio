import { fetchProjectFile } from '@/services/fetchProjectFile'
import { techInformation } from '../helpers/techInformation'
import techStyle from './tech-stack.module.scss'

interface TechStackProps {
	projects: string
	techs?: string[]
}

export const TechStack = async ({
	projects,
	techs,
}: TechStackProps) => {
	if (techs?.length) {
		return (
			<ul className={techStyle.cardTech}>
				{techs.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
		)
	}

	const projectFile = await fetchProjectFile(projects)

	if (!projectFile?.content) {
		return null
	}

	return (
		<ul className={techStyle.cardTech}>
			{techInformation(projectFile.content).map((tech) => (
				<li key={tech}>{tech}</li>
			))}
		</ul>
	)
}