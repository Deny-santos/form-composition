"use client"

import { useState } from 'react';
import { InputContext } from "../../../context/inputFocus";
import { useContext } from 'react';
import { InputType } from '../types';


const UseForm = () => {
        const inputContext = useContext(InputContext);

        if (!inputContext) {
            throw new Error('Error: Missing context value');
        }

        const { inputFocus, setInputFocus } = inputContext;

        const handleInputFocus = (inputName: string) => {
            setInputFocus((prev: InputType) => ({ ...prev, [inputName]: true }));
        };

        const handleInputBlur = (inputName: string) => {
            setInputFocus((prev: InputType) => ({ ...prev, [inputName]: false }));
        };

        const [inputTypeText, setInputTypePassword] = useState(false);

        const handleChangeInputType = () => {
            setInputTypePassword(!inputTypeText);
        };

        return {
            inputFocus,
            inputTypeText,
            handleInputFocus,
            handleInputBlur,
            handleChangeInputType,
        };
};

export default UseForm;
