'use client'

import { useEffect, useState } from 'react'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'

export const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setIsMobile(window.innerWidth < 900)
			}

			handleResize()
			window.addEventListener('resize', handleResize)

			return () => window.removeEventListener('resize', handleResize)
		}
	}, [])

	return isMobile !== undefined ? isMobile ? <MobileMenu /> : <DesktopMenu /> : null
}
