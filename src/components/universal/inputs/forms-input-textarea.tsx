import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react"


interface props {
    label: string
    questionValue: string
    setQuestionValue: Dispatch<SetStateAction<string>>
}

export const InputTextArea = (props: props) => {

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleQuestionInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (props.setQuestionValue) {
            props.setQuestionValue(event.target.value);
            adjustTextareaHeight();
        }
    }


    return (
        <div className={`flex flex-col gap-5 items-start`}>
            <p>{props.label}</p>
            <textarea
                ref={textareaRef}
                className="border-b border-neutral outline-none pb-1 bg-transparent w-full font-light resize-none h-auto w-2/5 overflow-hidden"
                value={props.questionValue}
                onChange={handleQuestionInput}
                rows={1}
            ></textarea>
        </div>
    )
}