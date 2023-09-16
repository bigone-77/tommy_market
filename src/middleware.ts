import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware"

// export const config = { matcher: ["/admin/:path*", "/user"] }

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET });
    const pathname = req.nextUrl.pathname;
    
    // 로그인 안된 사람들은 user 페이지 접근 X
    if (pathname.startsWith('/user') && !session) {
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    
    // role이 admin이 아닌 사람들은 admin 페이지 접근 X
    if (pathname.startsWith('/admin') && (session?.role !== 'Admin')) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    // 로그인된 유저는 로그인, 회원가입 페이지 접근 X
    if (pathname.startsWith('/auth') && session) {
        return NextResponse.redirect(new URL('/', req.url));
    }
    
    return NextResponse.next();
}