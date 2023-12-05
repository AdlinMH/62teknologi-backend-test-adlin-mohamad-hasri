import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const business_search = await prisma.BusinessSearch.findMany()
    return NextResponse.json({ business_search: business_search }, { status: 200 })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
}
