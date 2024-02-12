import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"
import { InputCheckBox } from "./input-checkbox"

interface props {
    label: string
    checkValue: boolean
    onlyNumbers?: boolean
    setCheckValue: Dispatch<SetStateAction<boolean>>
    questionText?: string
    questionValue?: string
    setQuestionValue?: Dispatch<SetStateAction<string>>
}

export const InputYesNo = (props: props) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);


    
    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };
    
    const handleQuestionInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let value = event.target.value;
        if (props.setQuestionValue) {
            if (props.onlyNumbers) {
                value = value.replace(/\D/g, "");
            }
            props.setQuestionValue(value);
            adjustTextareaHeight();
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5">
                <InputCheckBox
                    value={props.checkValue}
                    setValue={props.setCheckValue}
                ></InputCheckBox>
                <p>{props.label}</p>
            </div>
            <div className={`flex flex-col gap-5 items-start ps-14 ${props.questionValue != undefined && props.checkValue ? 'block' : 'hidden'}`}>
                <p>{props.questionText}</p>
                <textarea
                    ref={textareaRef}
                    className="border-b border-neutral outline-none pb-1 bg-transparent w-full font-light resize-none h-auto w-2/5 overflow-hidden"
                    value={props.questionValue}
                    onChange={handleQuestionInput}
                    rows={1}
                ></textarea>
            </div>
        </div>
    )
}