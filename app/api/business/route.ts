import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

import { NextResponse } from 'next/server'
import { Business } from './_types'

export async function POST(request: Request) {
  const res: Business = await request.json()

  await prisma.BusinessSearch.create(res)

  return NextResponse.json({ data: null, success: true }, { status: 200 })
}

export async function PUT(request: Request) {
  const res: Business = await request.json()
  const post = await prisma.post.update({
    where: { id: 1 },
    data: {res},
  })
  return NextResponse.json({ data: null, success: true }, { status: 200 })
}