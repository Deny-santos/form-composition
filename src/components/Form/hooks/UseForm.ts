"use client"

import { InputContext } from "../../../context/inputFocus";
import { useContext } from 'react';
import { InputType } from '../types';


const UseForm = () => {
        const inputContext = useContext(InputContext);

        if (!inputContext) {
            throw new Error('Error: Missing context value');
        }

        const { inputFocus, setInputFocus, isInputText, setIsInputText } = inputContext;

        const handleInputFocus = (inputName: string) => {
            setInputFocus((prev: InputType) => ({ ...prev, [inputName]: true }));
        };

        const handleInputBlur = (inputName: string) => {
            setInputFocus((prev: InputType) => ({ ...prev, [inputName]: false }));
        };

        const handleChangeInputType = () => {
            setIsInputText(!isInputText);
        };

        return {
            inputFocus,
            isInputText, 
            setIsInputText,
            handleInputFocus,
            handleInputBlur,
            handleChangeInputType,
        };
};

export default UseForm;
