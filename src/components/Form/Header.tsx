import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Header = ({ children }: Props) => {
    return (
        <div className={`
            h-5 flex justify-between items-center
        `}>
            {children}
        </div>
    )
}
