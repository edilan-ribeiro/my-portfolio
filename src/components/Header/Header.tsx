'use client'

import { useEffect, useState } from 'react'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'

export const Header = () => {
	const [isMobile, setIsMobile] = useState<boolean>()

	useEffect(() => {
		if (window.innerWidth < 900) {
			setIsMobile(true)
		} else {
			setIsMobile(false)
		}
	}, [])

	return isMobile !== undefined ? isMobile ? <MobileMenu /> : <DesktopMenu /> : null
}
