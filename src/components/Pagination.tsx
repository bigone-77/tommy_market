'use client'

import React from 'react'
import usePagination from '@lucasmogari/react-pagination';
import PaginationLink from './PaginationLink';

interface PaginationProps {
    page: number;
    totalItems: number;
    perPage: number;
}

const Pagination = ({
    page,
    totalItems,
    perPage
}: PaginationProps) => {

    const { fromItem, toItem, getPageItem, totalPages } = usePagination({
        totalItems: totalItems,
        page: page,
        itemsPerPage: perPage,
        maxPageItems: 5
    })

    const firstPage = 1;

    const nextPage = Math.min(page + 1, totalPages);
    const prevPage = Math.max(page - 1, firstPage);

    const arr = new Array(totalPages + 2);
    
    return (
        <div className='flex items-center justify-center gap-2 mt-4'>
            {/* Item {fromItem} - {toItem} */}
            {[...arr].map((_, i) => {
                const { page, disabled, current } = getPageItem(i);
        
                if (page === 'previous') {
                    return (
                        <PaginationLink
                            page={prevPage}
                            disabled={disabled}
                            key={i}
                        >{"<"}</PaginationLink>
                    )
                }

                if (page === 'next') {
                    return (
                        <PaginationLink
                            page={nextPage}
                            disabled={disabled}
                            key={i}
                        >{">"}</PaginationLink>
                    )
                }

                if (page === 'gap') {
                    return (
                        <span key={i}>...</span>
                    )
                }
                return (
                    <PaginationLink
                        key={i}
                        active={current}
                        page={page}
                    >{page}</PaginationLink>)
            })}
        </div>
    )
}

export default Pagination