import { ChangeEvent, useState } from "react";

interface props {
    id?: string
    label?: string
    type: string
    onInputChange: (value: string) => void;
}

export const Input = (props: props) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        props.onInputChange(event.target.value);
    }

    return (
        <div className="flex flex-col">
            {props.id != null && props.label != null ? 
                <label 
                    htmlFor={props.id}
                    className="ps-6"
                >
                    {props.label}
                </label>
                :
                ''    
            }
            <input
                id={props.id != null ? props.id : ''}
                type={props.type}
                value={inputValue}
                onChange={handleInputChange}
                className="w-full border border-zinc-400 bg-white outline-none rounded-3xl p-4"
            ></input>
        </div>
    )
}