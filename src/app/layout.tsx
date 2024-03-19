import type { Metadata } from 'next'

import { Open_Sans } from 'next/font/google'
import '@/styles/global.scss'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Edilan Ribeiro - Desenvolvedor Full Stack',
	description: 'Portfolio de Edilan Ribeiro',
	icons: {
		icon: '/favicon.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-br' suppressHydrationWarning={true}>
			<body className={openSans.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	)
}
