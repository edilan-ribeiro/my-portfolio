import { expect, test, describe } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { Header } from '@/components/Header/Header'
import userEvent from '@testing-library/user-event'

describe('Ensure the header is working properly on desktop and mobile', () => {
	test('Checks if the desktop header is being called and working as intended', () => {
		render(<Header />)

		const links = screen.queryAllByRole('link')
		const expectedHrefs = ['#about', '#skills', '#projects', '#contact']

		links.forEach((link) => {
			expect(expectedHrefs).toContain(link.getAttribute('href'))
		})

		const conditionalHomeIcon = screen.queryByTestId('home-icon')

		expect(conditionalHomeIcon).not.toBeInTheDocument()

		const header = screen.getByRole('banner')
		fireEvent.scroll(window, { target: { scrollY: 1000 } })

		setTimeout(() => {
			expect(header).toHaveAttribute('data-scrolled', 'true')
			expect(conditionalHomeIcon).toBeInTheDocument()
		}, 200)
	})

	test('Checks if the mobile header is being called and working as intended on a mobile window', async () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 899,
		})

		window.dispatchEvent(new Event('resize'))

		const user = userEvent.setup()
		render(<Header />)

		const hamburguerMenuButton = screen.getByRole('button', { name: /menu mobile fechado/i })
		await user.click(hamburguerMenuButton)

		expect(hamburguerMenuButton).toHaveAccessibleName(/menu mobile aberto/i)

		const mobileMenu = screen.getByTestId('mobile-nav')

		expect(mobileMenu).toBeVisible()

		const links = screen.queryAllByRole('link')
		const expectedHrefs = ['#hero', '#about', '#skills', '#projects', '#contact']

		links.forEach((link) => {
			expect(expectedHrefs).toContain(link.getAttribute('href'))
		})

		await user.click(hamburguerMenuButton)
		expect(hamburguerMenuButton).toHaveAccessibleName(/menu mobile fechado/i)
		expect(mobileMenu).not.toBeVisible()
	})
})
