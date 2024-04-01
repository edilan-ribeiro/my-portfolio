import { Hero } from '@/components/Hero/Hero'
import { render, screen } from '@testing-library/react'
import fallbackImage from '@/assets/hero/clouds-bg.jpg'

describe('Ensure the hero component has the correct content', () => {
	beforeEach(() => {
		render(<Hero />)
	})

	it('Should have a title', () => {
		const heroTitle = screen.getByRole('heading', { name: /edilan ribeiro/i })

		expect(heroTitle).toBeVisible()
	})

	it('Should have a subtitle', () => {
		const subtitle = screen.getByRole('heading', { name: /desenvolvedor full stack/i })

		expect(subtitle).toBeVisible()
	})

	it('Should have social links', () => {
		const socials = screen.getAllByRole('link', { name: /link to/i })

		socials.forEach((social) => {
			expect(social).toBeVisible()
			expect(social.getAttribute('aria-label')).toContain('link to')
		})
	})

	it('Should have a down indicator', () => {
		const downIndicator = screen.getByRole('link', { name: /ir para a próxima sessão/i })

		expect(downIndicator).toHaveAttribute('href', '#about')
		expect(downIndicator).toBeVisible()
	})

	it('Should have a video background with a fallback image', () => {
		const videoBackground = screen.getByTestId('hero-video')
		videoBackground.setAttribute('poster', `${fallbackImage}`)
        
		const videoSrc = videoBackground.querySelector('source')?.getAttribute('src')
		const videoFallback = videoBackground.getAttribute('poster')

		expect(videoSrc).toBe(
			'https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Watching-the-Universe-Blue.mp4'
		)
		expect(videoFallback).toBe(`${fallbackImage}`)

		expect(videoBackground).toBeVisible()
	})
})
