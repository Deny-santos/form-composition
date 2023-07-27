'use client'


import { Input } from './Input'
import { AiFillEyeInvisible } from "react-icons/ai"
import { AiFillEye } from "react-icons/ai"
import { Instructions } from './Instructions'
import UseForm from './hooks/UseForm'

type Props = {
    label: string
    name: string
}

export const InputPassword = ({ label, name }: Props) => {

    const { handleChangeInputType, inputTypeText } = UseForm()

    return (
        <div className='relative flex flex-col max-h-max'>
            <Instructions/>
            <Input label={label} name={name} type={inputTypeText ? "text" : "password"} />
            <span 
                className={`
                    absolute right-2  text-[25px] cursor-pointer top-10
                `}
                onClick={handleChangeInputType}>
                {inputTypeText ? <AiFillEye/> : <AiFillEyeInvisible />}
            </span>
        </div>
    )
}
