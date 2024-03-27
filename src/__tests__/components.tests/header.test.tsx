import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/Header/Header'

describe('Ensure the header is conditionally rendering correctly based on desktop and mobile', () => {
	const setupScreenSize = (width: number) => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: width,
		})

		window.dispatchEvent(new Event('resize'))
	}

	it('Checks if the desktop header content is shown and is working as intended', async () => {
		setupScreenSize(1024)
		render(<Header />)
		const expectedDesktopHrefs = ['#about', '#skills', '#projects', '#contact']

		const menuLinks = await screen.findAllByRole('link')
		menuLinks.forEach((link, index) => {
			expect(link.getAttribute('href')).toContain(expectedDesktopHrefs[index])
		})

		const conditionalHomeIcon = screen.queryByTestId('home-icon')
		expect(conditionalHomeIcon).not.toBeInTheDocument()

		const header = screen.getByRole('banner')

		fireEvent.scroll(window, { target: { scrollY: 1000 } })

		await waitFor(() => {
			expect(header).toHaveAttribute('data-scrolled', 'true')
		})

		const homeIcon = await screen.findByTestId('home-icon')
		expect(homeIcon).toBeVisible()
		expect(homeIcon.getAttribute('href')).toContain('#hero')
	})

	it('Checks if the mobile header content is shown and is working (open/close) as intended', async () => {
		setupScreenSize(700)
		const user = userEvent.setup()
		render(<Header />)

		const hamburguerMenu = screen.getByRole('button', { name: /menu mobile fechado/i })

		await user.click(hamburguerMenu)
		expect(hamburguerMenu).toHaveAccessibleName(/menu mobile aberto/i)

		const mobileNavMenu = screen.getByTestId('mobile-nav')
		expect(mobileNavMenu).toBeVisible()

		const expectedMobileHrefs = ['#hero', '#about', '#skills', '#projects', '#contact']
		const menuLinks = await screen.findAllByRole('link')
		menuLinks.forEach((link, index) => {
			expect(link.getAttribute('href')).toContain(expectedMobileHrefs[index])
		})

		await user.click(hamburguerMenu)
		expect(hamburguerMenu).toHaveAccessibleName(/menu mobile fechado/i)
		expect(mobileNavMenu).not.toBeVisible()
	})
})
