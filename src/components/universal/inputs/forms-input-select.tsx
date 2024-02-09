import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { SelectOption } from "./types/select-options";

interface props {
    label: string
    options: SelectOption[]
    value: string
    setValue: Dispatch<SetStateAction<string>>
    validateField: (value: string) => boolean
}

export const FormsInputSelect = (props: props) => {

    useEffect(() => {
        props.options.map((item) => {
            if (item.defaultSelected) {
                return props.setValue(item.value);
            }
        })

        console.log()
    }, []);

    const handleInput = (event: ChangeEvent<HTMLSelectElement>) => {
        let value = event.target.value;
        props.setValue(value);
    }

    return (
        <div className="flex flex-col gap-2">
            <label>{props.label}</label>
            <select
                className={`outline-none p-2 rounded-md shadow-sm shadow-base-300 bg-base-100 font-light border ${props.validateField(props.value) ? 'border-success' : props.value.length == 0 ? '' : 'border-error'}`}
                value={props.value}
                onChange={handleInput}
            >
                {props.options.map((item) => {
                    return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })}
            </select>
        </div>
    )
}