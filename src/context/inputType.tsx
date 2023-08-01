import { InputType } from "@/components/Form/types";
import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type InputTextState = {
    inputText: boolean;
    setInputText: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputTypeContext = createContext<InputTextState | undefined>(undefined);

export const InputProvider = (props: Props) => {
    const { children } = props;

    const [inputText, setInputText] = useState(false);

    return (
        <InputTypeContext.Provider value={{ inputText, setInputText }}>
            {children}
        </InputTypeContext.Provider>
    );
};
