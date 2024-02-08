import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface props {
    onlyNumbers?: boolean
    maxLength?: number
    value: string
    setValue: Dispatch<SetStateAction<string>>
    formatField?: (value: string) => string
    validateField: (value: string) => boolean
    label: string
    type: string
    spellCheck: boolean
}

export const FormsInput = (props: props) => {

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        if (props.maxLength) {
            if (value.length > props.maxLength) {
                if (value > props.value) {
                    return
                }
            }
        }

        if (props.onlyNumbers) {
            value = value.replace(/\D/g, "");
        }

        if (props.formatField) {
            value = props.formatField(value);
        }


        props.setValue(value);
    }

    return (
        <div className="flex flex-col gap-2">
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={handleInput}
                className={`outline-none p-2 rounded-md shadow-sm shadow-base-300 bg-base-100 font-light border ${props.validateField(props.value) ? 'border-success' : props.value.length == 0 ? '' : 'border-error'}`}
                spellCheck={props.spellCheck}
            ></input>
        </div>
    )
}