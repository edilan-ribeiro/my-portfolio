import { AnimatedDiv } from '../AnimatedDiv/AnimateDiv'
import sectionTitleStyles from './section-title.module.scss'

interface SectionTitleProps {
	sectionTitle: string
}

const sectionTitleVariants = {
	initial: {
		opacity: 0,
		y: '-100px',
	},
	whileInView: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.8,
		},
	},
}

export const SectionTitle = ({ sectionTitle }: SectionTitleProps) => {
	return (
		<AnimatedDiv
			initial='initial'
			whileInView='whileInView'
			variants={sectionTitleVariants}
			viewport={{ once: true, amount: 0.3 }}
			className={sectionTitleStyles.sectionTitle}
		>
			<h2>{sectionTitle}</h2>
			<div className={sectionTitleStyles.separator} />
		</AnimatedDiv>
	)
}
