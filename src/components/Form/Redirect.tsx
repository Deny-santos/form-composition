import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {
    text: string
    href: string
}

export const Redirect = ({ text, href }: Props) => {
    return (
        <a 
            className='flex items-center gap-2' 
            href={href}
        >
            {text} <AiOutlineArrowRight/>
        </a>
    )
}