'use client'

import { useEffect, useState } from 'react'
import menuStyle from './desktop-menu.module.scss'
import menu from '@/data/menu.json'
import { FaHome } from 'react-icons/fa'

export const DesktopMenu = () => {
	const [afterHero, setAfterHero] = useState(false)

	useEffect(() => {
		const getScrollPosition = () => {
			if (window.scrollY > 800) {
				setAfterHero(true)
			} else {
				setAfterHero(false)
			}
		}

		window.addEventListener('scroll', getScrollPosition)

		return () => {
			window.removeEventListener('scroll', getScrollPosition)
		}
	}, [])

	return (
		<header className={menuStyle.header} data-scrolled={afterHero}>
			<nav className={menuStyle.contentContainer}>
				<ul className={menuStyle.desktopMenu} data-scrolled={afterHero}>
					{afterHero && (
						<li key='home'>
							<a href='#hero'>
								<FaHome />
							</a>
						</li>
					)}
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
