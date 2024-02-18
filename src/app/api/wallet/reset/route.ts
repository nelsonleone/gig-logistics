import { NextRequest, NextResponse } from "next/server";
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken)
const sid = process.env.TWILIO_SERVICE_SID

export async function POST(request: NextRequest, response: NextResponse){

    const { phoneNumber } = await request.json()

    try{

        if(!phoneNumber){
            return NextResponse.json({ error: 'Phone number is required' }, { status: 400 } )
        }

        if(!sid){
            throw new Error("SID is Invalid")
        }

        await client.verify.v2.services(sid).verifications.create({to: '+2348096781730', channel: 'sms'})
     
        return NextResponse.json({ message: 'OTP sent successfully' })
    }

    catch(err:any|unknown){
        return NextResponse.json({ error: `Failed to send OTP: ${err.message}` }, { status: 500 })
    }
}



export async function GET(request: NextRequest, response: NextResponse){

    const { otp, phoneNumber } = await request.json()

    try{

        if(!otp){
            return NextResponse.json({ error: 'otp is required' }, { status: 400 } )
        }

        if(!sid){
            return NextResponse.json({ error: 'sid query is required'}, { status: 400 })
        }

        if(!phoneNumber){
            return NextResponse.json({ error: 'valid user phone number is required'}, { status: 400 })
        }

        const verificationCheck = await client.verify.v2.services(sid).verificationChecks.create({to: phoneNumber, code: otp })
    
        if (verificationCheck.status === 'approved') {
            NextResponse.json({ message: 'OTP verified successfully' })
        } else {
            NextResponse.json({ error: 'Invalid OTP' })
        }
    }

    catch(err:any|unknown){
        return NextResponse.json({ error: `Failed to send OTP: ${err.message}` }, { status: 500 })
    }
} 