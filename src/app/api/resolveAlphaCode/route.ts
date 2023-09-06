import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){

    const { searchParams } = new URL(request.url)
    const alphaCode = searchParams.get('alphaCode')

    return NextResponse.json({ message: alphaCode })
}