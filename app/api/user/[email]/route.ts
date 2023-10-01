import prisma from '@/app/prismadb'
import { NextApiHandler, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
   const email = request.url.slice(request.url.lastIndexOf('/') +1)
   
    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    })   

    if(user) {
        return NextResponse.json(user.email)
    } else {
        return NextResponse.json('')
    }
  }


