import { InputProvider } from '@/context/inputFocus'
import { FormRegister } from '@/pages/FormRegister'
import React from 'react'


const register = () => {
  return (
    <InputProvider>
      <FormRegister />
    </InputProvider>
  )
}

export default register