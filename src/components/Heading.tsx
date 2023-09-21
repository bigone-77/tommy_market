import React from 'react'

interface HeadingProps {
    title: string;
    subTitle?: string;
    center?: boolean; 
}

const Heading = ({
    title,
    subTitle,
    center
}: HeadingProps) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className='text-bold text-2xl'>
                {title}
            </div>
            <div className='text-neutral-500 mt-2 font-light'>
                {subTitle}
            </div>
        </div>
    )
}

export default Heading