import FormLogin from '@/pages/FormLogin'
import React from 'react'
import { InputProvider } from '@/context/inputFocus'

export default function Home() {
  return (
    <InputProvider>
      <FormLogin/>
    </InputProvider>
  )
}
