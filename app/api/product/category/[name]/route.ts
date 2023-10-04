import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const name = request.url.slice(request.url.lastIndexOf('/') +1)
     const category = await prisma.category.findUnique({
         where: {
             name
         }
     })   
 
     if(category) {
         return NextResponse.json(category.name)
     } else {
         return NextResponse.json('')
     }
   }