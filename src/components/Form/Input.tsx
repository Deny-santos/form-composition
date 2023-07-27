'use client'

import React, { InputHTMLAttributes, useId, useState } from 'react'
import UseForm from './hooks/UseForm'

type Props = {
    label: string
    name: string
} & InputHTMLAttributes<HTMLButtonElement>

export const Input = ({ type, label, name, ...rest }: Props) => {

    const { handleInputBlur, handleInputFocus } = UseForm()

    return (
        <div className='flex flex-col gap-2 '>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                className={`bg-transparent outline-none pr-10 pl-5 py-2 border-2 rounded-full overflow-hidden
                focus:border-blue-500 border-zinc-400
            `}
                type={type}
                name={name}
                onFocus={() => handleInputFocus(name)}
                onBlur={() => handleInputBlur(name)}
            />
        </div>
    )
}