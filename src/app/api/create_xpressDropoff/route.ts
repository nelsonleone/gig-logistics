import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, response: NextResponse) {
    const res = request.json()
    const xpressDropOffInfo = res;
}