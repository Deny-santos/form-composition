import React from 'react'

type Props = {
    text: string
}

export const Title = ({ text }: Props) => {
    return (
        <h2 className='text-[1.6rem] font-semibold'>{text}</h2>
    )
}