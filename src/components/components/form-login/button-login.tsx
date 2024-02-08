
interface props {
    text: string
    onButtonLoginClick: () => void
}

export const ButtonLogin = (props: props) => {
    return (
        <button
            className="w-full p-4 bg-slate-800 text-white font-md rounded-3xl outline-none"
            onClick={props.onButtonLoginClick}
        >
            {props.text}
        </button>
    )
}