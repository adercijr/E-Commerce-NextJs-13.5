import prisma from '@/app/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const body = await request.json()
    const { name } = body
    try {
        const category = await prisma.category.create({
            data: {
                name: name
            }
        })

        return NextResponse.json(category)
    } catch {
        return NextResponse.error()
    }
} 

export async function PUT(request: Request) {
    const body = await request.json()
    const { id, name } = body
    try {
        const updateCategory = await prisma.category.update({
            where: {
              id
            },
            data: {
              name
            },
          })

        return NextResponse.json(updateCategory)
    } catch {
        return NextResponse.error()
    }
} 
export async function DELETE(request:Request){
    const id = Number(request.url.slice(request.url.lastIndexOf('=') +1))

    try{
        const deletedProduct=await prisma.category.delete({
            where:{
                id: id
            }
        })
        return NextResponse.json(deletedProduct)
    }catch(error){
        console.error("Error deleting product", error)
        return NextResponse.error()
    }
}




