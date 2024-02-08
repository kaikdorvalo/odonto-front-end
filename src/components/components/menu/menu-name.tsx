
interface props {
    name: string
}

export const MenuName = (props: props) => {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}