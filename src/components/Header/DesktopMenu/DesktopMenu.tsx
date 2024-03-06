import menuStyle from './desktop-menu.module.scss'

export const DesktopMenu = () => {
	const menu = ['habilidades', 'meus projetos', 'contato']

	return (
		<header className={menuStyle.header}>
			<nav className={menuStyle.contentContainer}>
				<ul className={menuStyle.desktopMenu}>
					{menu.map((menuItem) => (
						<li key={menuItem}>
							<a href={`#${menuItem}`}>{menuItem}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
