import { useNavigate } from "react-router-dom"
import { ListItem } from "../../../classes/list-item"

interface props {
    listItem: ListItem
    listItemIndex: number
}

export const MenuListItem = (props: props) => {

    const navigate = useNavigate();

    const click = () => {
        navigate('/' + props.listItem.path);
    }

    return (
        <li className={`${props.listItem.active ? 'rounded-tl-full rounded-bl-full' : ''} w-11/12 bg-base-200`}>
            <button className={`${props.listItem.styles} w-full h-full text-start outline-none`} onClick={click}>
                <div className={`${props.listItem.styles} w-full h-full p-4 ${props.listItem.active ? '' : 'bg-base-100'}`}>
                    <p>{props.listItem.label}</p>
                </div>
            </button>
        </li>
    )
}