"use client"

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type InputFocus = {
    email: boolean;
    password: boolean;
};

type InputContextType = {
    inputFocus: InputFocus;
    setInputFocus: React.Dispatch<React.SetStateAction<InputFocus>>;
};

export const InputContext = createContext<InputContextType | undefined>(undefined);

export const InputProvider = (props: Props) => {
    const { children } = props;

    const [inputFocus, setInputFocus] = useState<InputFocus>({
        email: false,
        password: false
    });

    return (
        <InputContext.Provider value={{ inputFocus, setInputFocus }}>
            {children}
        </InputContext.Provider>
    );
};
