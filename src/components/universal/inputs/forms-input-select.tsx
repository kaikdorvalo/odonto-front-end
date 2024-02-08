import { useState } from "react";
import { SelectOption } from "./types/select-options";

interface props {
    label: string
    options: SelectOption[]
}

export const FormsInputSelect = (props: props) => {
    const [value, setValue] = useState('');

    return (
        <div className="flex flex-col gap-2">
            <label>{props.label}</label>
            <select className="outline-none p-2 rounded-md shadow-sm shadow-base-300 bg-base-100 font-light">
                <option value="none" disabled selected>Selecione</option>
                {props.options.map((item) => {
                    return (
                        <option value={item.value}>{item.label}</option>
                    )
                })}
            </select>
        </div>
    )
}