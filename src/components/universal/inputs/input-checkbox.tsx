import { Dispatch, SetStateAction, useState } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    value: boolean;
    setValue: Dispatch<SetStateAction<boolean>>
}

export const InputCheckBox = (props: props) => {

    const handleButtonClick = () => {
        props.setValue(!props.value);
    }

    return (
        <button 
            className={`w-8 h-8 flex justify-center items-center border outline-none rounded-md ${props.value ? 'border-success' : 'border-neutral'}`}
            onClick={handleButtonClick}
        >
            <FontAwesomeIcon icon={faCircleCheck} size="xl" color="success" className={`text-success ${props.value ? 'block' : 'hidden'}`}/>
        </button>
    )
}