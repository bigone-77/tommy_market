import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        // currentUser에는 데이터베이스에서 아래 조건 하에 찾은 유저데이터가 들어간다
        const currentUser = await prisma?.user.findUnique({
            where: {
                email: session.user.email
            }
        })

        if(!currentUser) {
            return null;
        }

        return currentUser;

    }   catch(e) {
        return null;
    }
}