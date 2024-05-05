import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {

        const { userReport, userEmail,reportScreenshot } = await request.json()

        if(!userReport || !userEmail || !reportScreenshot){
          return NextResponse.json({ message: "Incomplete parameters passed, make sure to add 'userEmail', 'userReport' and 'reportScreenshot' in request body" }, { status: 400 })
        }

        await sendEmail(userReport,userEmail,reportScreenshot)
    
        return NextResponse.json({ message: 'User report sent successfully'}, { status: 201 } )

    } catch (error) {
        console.error('Error sending user report:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

async function sendEmail(userReport: string, userEmail: string, reportScreenshot: string) {
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
      attachments: [
        {
          filename: 'report-image.png',
          content: reportScreenshot,
          encoding: 'base64'
        }
      ]
      
    }
  
    await transporter.sendMail(mailOptions)
}