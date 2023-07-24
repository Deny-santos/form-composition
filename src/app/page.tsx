import { Form } from '@/components/Form'
import React from 'react'

export default function Home() {
  return (
    <div className={`
        flex items-center justify-center min-h-[100vh]
      `}>

      <Form.Container>
        <Form.Header>
          <Form.Title text='Entrar' />
          <Form.Redirect href='register' text='Já Tenho Conta' />
        </Form.Header>

        <Form.Input type='email' label='Digite Seu Email' name='email' />
        <Form.Input type='password' label='Digite Sua senha' name='password' />

      </Form.Container>


    </div>
  )
}
