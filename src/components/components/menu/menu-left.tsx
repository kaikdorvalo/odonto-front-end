import { useState } from "react"
import { ListItem } from "../../../classes/list-item"
import { MenuHeader } from "./menu-header"
import { MenuList } from "./menu-list"
import { MenuTop } from "./menu-top"

interface props {
    photoUrl: string
    name: string
    listItems: ListItem[]
    defaultSelectedIndex: number
}

export const MenuLeft = (props: props) => {

    const [menuActive, setMenuActive] = useState(false);

    return (
        <div className="w-full flex h-full flex-col bg-base-100
            lg:p-0 lg:h-full
        ">
            <div className="w-full h-16 flex justify-between items-center border-b">
                    <MenuTop
                        setMenuActive={setMenuActive}
                        menuActive={menuActive}
                    >
                    </MenuTop>
            </div>
            
            <div className={`w-full absolute top-16 bg-base-100 transition-all ${menuActive? 'visible h-[calc(100svh-4rem)]' : 'invisible h-0'}
                lg:static lg:top-0 lg:visible lg:h-full
            `}>
                <MenuHeader
                    photoUrl={props.photoUrl}
                    name={props.name}
                ></MenuHeader>

                <MenuList
                    listItems={props.listItems}
                    defaultSelectedIndex={props.defaultSelectedIndex}
                >
                </MenuList>
            </div>
        </div>
    )
}