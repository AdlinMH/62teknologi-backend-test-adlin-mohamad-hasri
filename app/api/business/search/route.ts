import prisma from '../../../../lib/prisma'

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const business_search = await prisma.BusinessSearch.findMany()
    return NextResponse.json({ business_search: business_search }, { status: 200 })
}