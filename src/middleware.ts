import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from './lib/contactFormSchema'

export async function middleware(req: NextRequest, res: NextResponse) {
	const formData = await req.json()

	const validateFormData = contactFormSchema.safeParse(formData)

	if (!validateFormData.success) {
		return NextResponse.json({ message: 'Incorrect data format' }, { status: 422 })
	} else {
		return NextResponse.next()
	}
}

export const config = {
	matcher: '/api/send',
}