import React from 'react'

type Props = {
    errors: any
}

export const ErrorMessage = ({ errors }: Props) => {
    return (
        <span className="text-red-500 text-[12px] ml-5 flex">{errors}</span>
    )
}
