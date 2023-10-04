import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  
    try {
        const category = await prisma.category.findMany()

        return NextResponse.json(category)
    } catch {
        return NextResponse.error()
    }
} 

