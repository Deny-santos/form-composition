'use client'

import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { Instructions } from './Instructions'
import { InputHTMLAttributes } from 'react'
import UseForm from "./hooks/UseForm"


type Props = {
    children: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const InputPassword = ({ children }: Props) => {

    const { handleChangeInputType, isInputText } = UseForm()

    return (
        <div className='relative flex flex-col max-h-max gap-2'>
            <Instructions/>
            {children}
            <span 
                className={`
                    absolute right-3  text-[25px] cursor-pointer top-10 text-blue-600
                `}
                onClick={handleChangeInputType}>
                {isInputText ? <AiFillEye/> : <AiFillEyeInvisible />}
            </span>
        </div>
    )
}
