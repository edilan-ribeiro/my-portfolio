import sectionTitleStyles from './section-title.module.scss'

interface SectionTitleProps {
	sectionTitle: string
}

export const SectionTitle = ({ sectionTitle }: SectionTitleProps) => {
	return (
		<div className={sectionTitleStyles.sectionTitle}>
			<h2>{sectionTitle}</h2>
			<div className={sectionTitleStyles.separator} />
		</div>
	)
}
