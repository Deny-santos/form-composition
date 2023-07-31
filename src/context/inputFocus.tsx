"use client"

import { InputType } from "@/components/Form/types";
import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};



type InputContextType = {
    inputFocus: InputType;
    setInputFocus: React.Dispatch<React.SetStateAction<InputType>>;
};

export const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = (props: Props) => {
    const { children } = props;

    const [inputFocus, setInputFocus] = useState<InputType>({
        email: false,
        password: false
    });

    return (
        <InputContext.Provider value={{ inputFocus, setInputFocus }}>
            {children}
        </InputContext.Provider>
    );
};
