'use client'

import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import mobileStyle from './mobile-menu.module.scss'
import { motion } from 'framer-motion'

const variants = {
	open: { opacity: 1, x: 0, },
	closed: { opacity: 0, x: '50%' },
}

export const MobileMenu = () => {
	const [isOpen, setOpen] = useState(false)

	const menu = ['habilidades', 'meus projetos', 'contato']

	return (
		<>
			<button className={mobileStyle.hamburguer}>
				<Hamburger toggled={isOpen} toggle={setOpen} size={32} rounded />
			</button>

			<motion.div
				className={mobileStyle.mobileNav}
				animate={isOpen ? 'open' : 'closed'}
				variants={variants}
                initial={false}
			>
				<nav>
					<ul>
						{menu.map((menuItem) => (
							<li key={menuItem}>
								<a href={`#${menuItem}`}>{menuItem}</a>
							</li>
						))}
					</ul>
				</nav>
			</motion.div>
		</>
	)
}
