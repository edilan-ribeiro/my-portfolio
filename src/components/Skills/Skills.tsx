import skillData from '@/data/skills.json'
import skillsStyles from './skills.module.scss'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { FaCss3Alt, FaGitAlt, FaHtml5, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi'

export const Skills = () => {
	interface icon {
		[key: string]: JSX.Element
	}

	const icons: icon = {
		HTML: <FaHtml5 />,
		CSS: <FaCss3Alt />,
		JavaScript: <RiJavascriptFill />,
		TypeScript: <BiLogoTypescript />,
		React: <FaReact />,
		'Next.js': <SiNextdotjs />,
		Sass: <FaSass />,
		Tailwind: <SiTailwindcss />,
		'Git/GitHub': <FaGitAlt />,
		PostgreSQL: <BiLogoPostgresql />,
		'Node.js': <FaNodeJs />,
		Express: <SiExpress />,
	}

	return (
		<section className={skillsStyles.skills} id='skills'>
			<div className={skillsStyles.contentContainer}>
				<SectionTitle sectionTitle='Habilidades' />

				<div className={skillsStyles.skillsContainer}>
					{skillData.map((skill) => (
						<div key={skill.name} className={skillsStyles.skillCard}>
							<div className={skillsStyles[skill.color]}>
								<div className={skillsStyles.iconContainer}>
									{icons[skill.name]}
								</div>

								<h3>{skill.name}</h3>
							</div>

							<p>{skill.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
