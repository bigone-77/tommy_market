import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/helpers/prismadb';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const {
        title,
        description,
        category,
        latitude,
        longitude,
        imageSrc,
        price
    } = body;

    Object.keys(body).forEach((value) => {
        if(!body[value]) {
            return NextResponse.error();
        }
    })

    // product 테이블에 값을 저장 ( 회원가입하는 라우트랑 매우 유사하니 참고!! )
    const product = await prisma.product.create({
        data: {
            title,
            description,
            category,
            latitude,
            longitude,
            imageSrc,
            price: Number(price),
            userId: currentUser.id
        }
    })
    return NextResponse.json(product);
}