import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '@/styles/global.scss'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Edilan Ribeiro - Desenvolvedor Fullstack',
	description: 'Portfolio de Edilan Ribeiro',
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
