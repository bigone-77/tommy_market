import bcrypt from 'bcryptjs';
import prisma from '@/helpers/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // 클라이언트에서 서버로 POST 요청된(request) 데이터 처리하기 위한 값을 담은 값
    const body = await request.json();

    const {
        email,
        name,
        password
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    })

    return NextResponse.json(user);
}