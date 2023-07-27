import { Form } from '@/components/Form'
import { InputProvider } from '@/context/inputFocus'
import React from 'react'

export default function Home() {
  return (
    <InputProvider>
      <div className={`
        flex items-center justify-center min-h-[100vh]
      `}>

        <Form.Container>
          <Form.Header>
            <Form.Title text='Entrar' />
            <Form.Redirect href='register' text='Já Tenho Conta' />
          </Form.Header>

          <Form.Input type='email' label='Digite Seu Email' name='email' />
          <Form.InputPassword label='Password' name='password' />

        </Form.Container>
        
      </div >
    </InputProvider>
  )
}
