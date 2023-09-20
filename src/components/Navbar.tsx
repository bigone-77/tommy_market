'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './NavItem';
import { User } from '@prisma/client';

interface NavbarProps {
    currentUser?: User | null;
}

const NavBar = ({ currentUser }: NavbarProps) => {
    const [menu, setMenu] = useState(false);

    const clickMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav className='relative z-10 w-full bg-orange-500 text-white'>
            <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-20'>
                <div className='flex items-center text-2xl h-14'>
                    <Link href='/'>Logo</Link>
                </div>

                <div className='text-2xl sm:hidden'>
                    <button onClick={clickMenu}>{menu ? '-' : '+'}</button>
                </div>

                <div className='hidden sm:block'>
                    <NavItem currentUser={currentUser}/>
                </div>
            </div>

            <div className='block sm:hidden'>
                {(menu === true) ? <NavItem mobile currentUser={currentUser}/> : null}
            </div>
        </nav>
    )
}

export default NavBar