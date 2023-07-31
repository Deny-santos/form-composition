import React from 'react'

type Props = {
    text: string
    to: string
}

export const Label = ({ text, to }: Props) => {
    return (
        <label className='ml-3' htmlFor={to}>{text}</label>
    )
}
