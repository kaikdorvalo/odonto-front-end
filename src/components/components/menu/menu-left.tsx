import { ListItem } from "../../../classes/list-item"
import { MenuHeader } from "./menu-header"
import { MenuList } from "./menu-list"

interface props {
    photoUrl: string
    name: string
    listItems: ListItem[]
    defaultSelectedIndex: number
    configButtonClick: () => void
}

export const MenuLeft = (props: props) => {
    return (
        <div className="w-full h-full flex flex-col gap-10 bg-base-100">
            <MenuHeader
                photoUrl={props.photoUrl}
                name={props.name}
                configButtonClick={props.configButtonClick}
            ></MenuHeader>

            <MenuList
                listItems={props.listItems}
                defaultSelectedIndex={props.defaultSelectedIndex}
            >
            </MenuList>
        </div>
    )
}