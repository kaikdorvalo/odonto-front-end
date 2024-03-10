import { MenuButton } from "./menu-button/menu-menu-button"
import { MenuTitle } from "./menu-title"
import { Dispatch, SetStateAction } from "react"

interface props {
    setMenuActive: Dispatch<SetStateAction<boolean>>
    menuActive: boolean
}

export const MenuTop = (props: props) => {

    return (
        <div className="w-full h-full flex justify-between items-center p-4">
            <MenuTitle></MenuTitle>
            {/* <MenuConfigButton
                buttonClick={props.configButtonClick}
            ></MenuConfigButton> */}

            <MenuButton
                setMenuActive={props.setMenuActive}
                menuActive={props.menuActive}
            >
            </MenuButton>
        </div>
    )
}