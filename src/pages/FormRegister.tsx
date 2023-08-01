'use client'

import { Form } from '@/components/Form'
import { InputProvider } from '../context/inputFocus'
import React from 'react'
import { ErrorMessage } from '@/components/Form/ErrorMessage'
import useFormZod from '@/components/Form/hooks/UseFormZod'
import UseForm from '@/components/Form/hooks/UseForm'


export const FormRegister = () => {

    const {errors, register} = useFormZod()
    const {handleInputBlur, handleInputFocus, isInputText} = UseForm()

    return (
        <InputProvider>
            <div className={`
                flex items-center justify-center min-h-[100vh]
            `}>
                <Form.Container>
                    <Form.Header>
                        <Form.Title text='Criar Conta' />
                        <Form.Redirect href='/' text='Já Tenho Conta' />
                    </Form.Header>

                    <Form.InputContainer>
                        <Form.Label text='Email' to='email' />
                        <input
                            {...register("email")}
                            className={`
                                bg-transparent outline-none pr-10 pl-5 py-2 border-2 rounded-full overflow-hidden
                                focus:border-blue-500 border-zinc-400
                            `}
                        />
                        <ErrorMessage errors={errors.email?.message} />
                    </Form.InputContainer>

                    <Form.InputPassword>
                        <Form.Label text='Senha' to='password' />
                        <input
                            {...register("password")}
                            className={`
                                bg-transparent outline-none pr-10 pl-5 py-2 border-2 rounded-full overflow-hidden
                                focus:border-blue-500 border-zinc-400
                            `}
                            type={isInputText ? 'text' : 'password'}
                            onFocus={() => handleInputFocus("password")}
                            onBlur={() => handleInputBlur("password")}
                        />
                        <ErrorMessage errors={errors.password?.message} />
                    </Form.InputPassword>

                    <input
                        {...register("hidden")}
                        disabled
                        
                    />
                    <Form.Button text='Criar Conta' />

                </Form.Container>
            </div>
        </InputProvider>
    )
}