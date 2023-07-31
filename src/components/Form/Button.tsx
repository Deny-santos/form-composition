import React, { ButtonHTMLAttributes } from 'react'

type Props = {
    text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text }: Props) => {
    return (
        <button className={`
            bg-gradient-to-r from-blue-500 to-blue-900 duration-200
            hover:from-blue-900 hover:to-blue-500 
            max-w-max py-2 px-10 rounded-full mx-auto mt-5 text-white
        `}>
            {text}
        </button>
    )
}