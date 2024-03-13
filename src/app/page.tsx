import '@/styles/sections/sections.scss'
import { About } from '@/components/About/About'
import { Header } from '@/components/Header/Header'
import { Hero } from '@/components/Hero/Hero'
import { Skills } from '@/components/Skills/Skills'
import { Projects } from '@/components/Projects/Projects'
import { Footer } from '@/components/Footer/Footer'
import { Contact } from '@/components/Contact/Contact'

export default function Home() {
	return (
		<main>
			<Header />
			<section className='hero'>
				<Hero />
			</section>
			<section className='about' id='about'>
				<About />
			</section>
			<section className='skills' id='skills'>
				<Skills />
			</section>
			<section className='projects' id='projects'>
				<Projects />
			</section>
			<section  id='contact'>
				<Contact />
			</section>
			<Footer />
		</main>
	)
}
