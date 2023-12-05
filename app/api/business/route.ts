import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

import { NextResponse } from 'next/server'
import { Business } from './_types'

export async function GET(request: Request) {
    const business_search = await prisma.BusinessSearch.findMany()
    return NextResponse.json({ business_search: business_search }, { status: 200 })
}


export async function POST(request: Request) {
  const res: Business = await request.json()

  await prisma.BusinessSearch.create(res)

  const business_search = await prisma.BusinessSearch.findMany()
  return NextResponse.json({ business_search: business_search }, { status: 200 })
}