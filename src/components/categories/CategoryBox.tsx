import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons'

interface CategoryBoxProps {
    icon: IconType;
    path: string;
    label: string;
    selected?: boolean;
}

const CategoryBox = ({
    icon: Icon,
    path,
    label,
    selected
}: CategoryBoxProps) => {
    return (
        <Link
            href={`/?category=${path}`}
            className={`
                flex
                flex-col
                justify-center
                items-center 
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                ${selected ? 'border-b-neutral-800' : 'border-b-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
                `}
        >
            <Icon size={26}/>
            <div>
                {label}
            </div>
        </Link>
    )
}

export default CategoryBox
