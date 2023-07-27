import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Container = ({children}: Props) => {
    return (
        <div className={`
            flex flex-col gap-6 w-[500px] max-w-[90%] h-[500px] p-10
        `}>
            {children}
        </div>
    )
}