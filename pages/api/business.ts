import prisma from '../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const business_search = await prisma.BusinessSearch.findMany()
    res.status(200).json({ business_search: business_search });
}
