'use client'

import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { Instructions } from './Instructions'
import UseForm from './hooks/UseForm'
import { Children, InputHTMLAttributes } from 'react'


type Props = {
    children: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const InputPassword = ({ children }: Props) => {

    const { handleChangeInputType, inputTypeText } = UseForm()

    return (
        <div className='relative flex flex-col max-h-max gap-2'>
            <Instructions/>
            {children}
            <span 
                className={`
                    absolute right-3  text-[25px] cursor-pointer top-10 text-blue-600
                `}
                onClick={handleChangeInputType}>
                {inputTypeText ? <AiFillEye/> : <AiFillEyeInvisible />}
            </span>
        </div>
    )
}
