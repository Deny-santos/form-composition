'use client'

import React from 'react'


type Props = {
    children: React.ReactNode
}

export const InputContainer = ({ children }: Props) => {

    return (
        <div className='flex flex-col gap-2 '>
            {children}
        </div>
    )
}