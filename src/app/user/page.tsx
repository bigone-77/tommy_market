import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import getCurrentUser from '../actions/getCurrentUser'

const UserPage = async () => {

    // const session = await getServerSession(authOptions);
    // console.log('session', session);
    
    const userData = await getCurrentUser();
    console.log('userData', userData);
    

    return (
        <div>UserPage</div>
    )
}

export default UserPage