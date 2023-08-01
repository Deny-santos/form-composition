"use client"

import { InputType } from "@/components/Form/types";
import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};



type InputContextType = {
    inputFocus: InputType;
    setInputFocus: React.Dispatch<React.SetStateAction<InputType>>;
    isInputText: boolean
    setIsInputText: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = (props: Props) => {
    const { children } = props;

    const [inputFocus, setInputFocus] = useState<InputType>({
        email: false,
        password: false
    });

    const [isInputText, setIsInputText] = useState<boolean>(false)

    return (
        <InputContext.Provider value={{ inputFocus, setInputFocus, isInputText, setIsInputText}}>
            {children}
        </InputContext.Provider>
    );
};
