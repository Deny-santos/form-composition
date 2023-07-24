import React from 'react'

type Props = {
    text: string
    href: string
}

export const Redirect = ({ text, href }: Props) => {
    return (
        <a href={href}>{text}</a>
    )
}