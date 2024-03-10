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
        <li className={`${props.listItem.active ? ' lg:rounded-tl-full lg:rounded-bl-full' : ''} rounded-md overflow-hidden w-full lg:w-full bg-base-100 lg:bg-base-200`}>
            <button className={`${props.listItem.styles} w-full h-full text-start outline-none`} onClick={click}>
                <div className={`${props.listItem.styles} w-full h-full px-4 lg:p-4 ${props.listItem.active ? '' : 'bg-base-100'}`}>
                    <p className="p-2 rounded-md border border-base-300
                        lg:p-0 lg:rounded-none lg:border-none
                    ">{props.listItem.label}</p>
                </div>
            </button>
        </li>
    )
}