import menuStyle from './desktop-menu.module.scss'
import menu from '@/data/menu.json'

export const DesktopMenu = () => {


	return (
		<header className={menuStyle.header}>
			<nav className={menuStyle.contentContainer}>
				<ul className={menuStyle.desktopMenu}>
					{menu.map((menuItem) => (
						<li key={menuItem.name}>
							<a href={`#${menuItem.link}`}>{menuItem.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
