import { FaRegEnvelope, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import socialsStyle from './socials.module.scss'

export const Socials = () => {
	const socials = [
		{
			name: 'linkedin',
			link: 'https://www.linkedin.com/in/edilan-ribeiro-santos/',
			icon: <FaLinkedinIn size={28} />,
		},
		{
			name: 'github',
			link: 'https://github.com/edilan-ribeiro',
			icon: <FaGithub size={28} />,
		},
		{
			name: 'whatsapp',
			link: 'https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20portfolio!',
			icon: <FaWhatsapp size={28} />,
		},
		{
			name: 'email',
			link: 'mailto:edilanbusiness@gmail.com',
			icon: <FaRegEnvelope size={28} />,
		},
	]

	return (
		<nav>
			<ul className={socialsStyle.socials}>
				{socials.map((items) => (
					<li key={items.name}>
						<a href={items.link} target='_blank'>
							{items.icon}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
