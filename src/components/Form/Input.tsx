"use client"

import { type } from 'os'
import React, { InputHTMLAttributes, useId, useState } from 'react'
import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"

type Props = {
    label: string
    name: string
} & InputHTMLAttributes<HTMLButtonElement>

type InputType = {
    email: boolean
    password: boolean
}

export const Input = ({ type, label, name, ...rest }: Props) => {

    const [inputFocus, setinputFocus] = useState<InputType>({
        email: false,
        password: false
    })

    const [inputTypeText, setInputTypePassword] = useState(true)

    const handleInputFocus = (inputName: string) => {
        setinputFocus((preve) => ({ ...preve, [inputName]: true }))
    }

    const handleInputBlur = (inputName: string) => {
        setinputFocus((preve) => ({ ...preve, [inputName]: false }))
    }

    const handleChangeInputType = () => {
        setInputTypePassword(!inputTypeText)
    }


    return (
        <div className={`flex flex-col gap-3`}>
            <label htmlFor={name}>{label}</label>
            <div className={`
                flex flex-col border-2 rounded-full overflow-hidden w-[100%] relative
                ${inputFocus.email ? "border-blue-500" : inputFocus.password ? "border-blue-500" : "border-zinc-500"}
                ${type === "password" && "pr-4"}
            `}>
                <input
                    id={name}
                    className={`bg-transparent border-none outline-none px-3 py-1`}
                    type={type === "password" && !inputTypeText ? "text" : type}
                    name={name}
                    onFocus={() => handleInputFocus(name)}
                    onBlur={() => handleInputBlur(name)}
                />
                {type === "password" && 
                    <span className={`
                        absolute right-2 top-[5px] text-[25px] cursor-pointer
                    `}
                    onClick={handleChangeInputType}>
                        {type === "password" ? 
                            <AiFillEye className={``} /> 
                        : 
                            <AiFillEyeInvisible/>}
                    </span>
                }
            </div>
        </div>
    )
}