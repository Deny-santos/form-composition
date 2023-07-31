import { FormHTMLAttributes, ReactNode } from "react"


type Props = {
    children: ReactNode
} & FormHTMLAttributes<HTMLFormElement>


export const Container = ({children, ...rest }: Props) => {

    return (
        <form {...rest}
            className={`flex flex-col gap-6 w-[500px] max-w-[90%] h-[500px] p-10`}>
            {children}
        </form>
    )
}