'use client'

import { useEffect, useState } from 'react'
import menuStyle from './desktop-menu.module.scss'
import menu from '@/data/menu.json'
import { FaHome } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'

const desktopMenuVariants = {
	initial: {
		opacity: 0,
	},
	transition: {
		opacity: 1,
		duration: 0.3,
	},
}

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
		<AnimatePresence>
			<motion.header
				className={menuStyle.header}
				data-scrolled={afterHero}
				initial='initial'
				animate='transition'
				variants={desktopMenuVariants}
			>
				<nav className={menuStyle.contentContainer}>
					<ul className={menuStyle.desktopMenu}>
						{afterHero && (
							<li key='home'>
								<a href='#hero' data-testid='home-icon'>
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
			</motion.header>
		</AnimatePresence>
	)
}
