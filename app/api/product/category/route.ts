import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    const { name } = body

    try {
        const category = await prisma.category.create({
            data: {
                name
            }
        })

        return NextResponse.json(category)
    } catch {
        return NextResponse.error()
    }
} 


