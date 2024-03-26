'use client'

import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import mobileStyle from './mobile-menu.module.scss'
import { AnimatePresence, motion } from 'framer-motion'
import menu from '@/data/menu.json'

const mobileMenuVariants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: '50%' },
}

export const MobileMenu = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<>
			<button className={mobileStyle.hamburguer}>
				<Hamburger toggled={isOpen} toggle={setOpen} size={32} rounded label={`menu mobile ${isOpen ? 'aberto' : 'fechado'}`}/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={mobileStyle.mobileNav}
						initial={{ opacity: 0, x: '50%' }}
						exit={{ opacity: 0, x: '50%' }}
						animate={isOpen ? 'open' : 'closed'}
						variants={mobileMenuVariants}
						data-testid='mobile-nav'
					>
						<nav>
							<ul>
								<li key='home'>
									<a href='#hero'>Início</a>
								</li>
								{menu.map((menuItem) => (
									<li key={menuItem.name}>
										<a href={`#${menuItem.link}`}>
											{menuItem.name}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
