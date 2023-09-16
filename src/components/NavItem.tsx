import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface NavItemProps {
    mobile?: boolean;
}

const NavItem = ({ mobile }: NavItemProps) => {
    const { data: session, status } = useSession();
    console.log({session}, status);
    
    
    return (
        <ul className={`text-md justify-center flex gap-4 items-center ${mobile && 'flex-col h-full'}`}>
            <li className='border-b-4 py-2 text-center cursor-pointer'><Link href='/admin'>Admin</Link></li>
            <li className='border-b-4 py-2 text-center cursor-pointer'><Link href='/user'>User</Link></li>
            {session?.user
                ? <li className='border-b-4 py-2 text-center cursor-pointer'><button onClick={() => signOut()}>SignOut</button></li>
                : <li className='border-b-4 py-2 text-center cursor-pointer'><button onClick={() => signIn()}>SignIn</button></li>
            }
        </ul>
    )
}

export default NavItem