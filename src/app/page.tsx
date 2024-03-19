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

			<Hero />

			<About />

			<Skills />

			<Projects />

			<Contact />

			<Footer />
		</main>
	)
}
