'use client'

import { Form } from '@/components/Form'
import useFormZod from '@/components/Form/hooks/UseFormZod'
import UseForm from '@/components/Form/hooks/UseForm'
import { ErrorMessage } from '@/components/Form/ErrorMessage'


export default function FormLogin() {

    const { handleForm, errors, handleSubmit, register } = useFormZod()
    const { handleInputFocus, handleInputBlur } = UseForm()

    return (
        <div className={`
                flex items-center justify-center min-h-[100vh]
            `}>

            <Form.Container onSubmit={handleSubmit(handleForm)}>
                <Form.Header>
                    <Form.Title text='Entrar' />
                    <Form.Redirect href='register' text='Criar Conta' />
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
                        onFocus={() => handleInputFocus("password")}
                        onBlur={() => handleInputBlur("password")}
                    />
                    <ErrorMessage errors={errors.password?.message} />
                </Form.InputPassword>

                <input
                    {...register("hidden")}
                    disabled
                />

                <Form.RefinePassword text='Esqueci A Senha' href='#'/>
                <Form.Button text='Entrar' />

            </Form.Container>

        </div >
    )
}
