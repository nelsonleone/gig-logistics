import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {

        const { userReport, userEmail } = await request.json()

        await sendEmail(userReport,userEmail)
    
        return NextResponse.json({ message: 'User report sent successfully'}, { status: 201 } )

    } catch (error) {
        console.error('Error sending user report:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}

async function sendEmail(userReport: string, userEmail: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_SERVICE_GMAIL,
        pass: process.env.ADMIN_SERVICE_GMAIL_PASSWORD,
      },
    })
  
    const mailOptions = {
      from: userEmail,
      to: process.env.ADMIN_SERVICE_GMAIL,
      subject: 'GIGL C: User Report',
      text: userReport,
    }
  
    await transporter.sendMail(mailOptions)
}