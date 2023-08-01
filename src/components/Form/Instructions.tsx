import React from 'react'
import UseForm from './hooks/UseForm'



export const Instructions = () => {

    const { inputFocus } = UseForm()

    return (
        <div className={`absolute -top-[90px] w-full flex justify-center ${inputFocus.password ? "flex" : "hidden"}`}>
            <span className='bg-zinc-600 p-3 flex flex-col rounded-md shadow-xl text-white'>
                <span className='text-[12px] font-semibold'>Necessario!</span>

                <span className='text-[10px] flex items-center gap-1'>
                    <span className='text-red-500 text-[17px]'>*</span> 1 letra maiuscula
                </span>

                <span className='text-[10px] flex items-center gap-1'>
                    <span className='text-red-500 text-[17px]'>*</span> 1 caracter especial
                </span>
                
                <span className='text-[10px] flex items-center gap-1'>
                    <span className='text-red-500 text-[17px]'>*</span> Minimo de 8 Caracteres
                </span>
            </span>
        </div>
    )
}