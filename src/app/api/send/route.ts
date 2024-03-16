'use server'

import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest, res: NextResponse) {
	const formData = await req.json()

	const { name, email, message } = formData

	try {
		const data = await resend.emails.send({
			from: `delivered@resend.dev`,
			to: ['edilanbusiness@gmail.com'],
			subject: 'Contato pelo portfólio',
			text: `${name} enviou com o email ${email} e a seguinte mensagem: ${message}`,
		})

		return NextResponse.json({ data }, { status: 200 })
	} catch (error) {
		console.log(error)
		return NextResponse.json(
			{ message: 'There has been an error while sending  the message' },
			{ status: 500 }
		)
	}
}
