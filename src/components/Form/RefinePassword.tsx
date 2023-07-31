import React from 'react'

type Props = {
    text: string
    href: string
}

export const RefinePassword = ({text, href}: Props) => {
    return (
        <a className='underline max-w-max' href={href}>{text}</a>
    )
}