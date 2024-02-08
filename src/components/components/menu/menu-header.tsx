import { MenuConfigButton } from "./menu-config-button"
import { MenuName } from "./menu-name"
import { MenuPhoto } from "./menu-photo"
import { MenuTitle } from "./menu-title"

interface props {
    photoUrl: string
    name: string
    configButtonClick: () => void
}

export const MenuHeader = (props: props) => {
    return (
        <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full flex flex-col items-center gap-8 p-4">
                <div className="w-full flex justify-between items-center">
                    <MenuTitle></MenuTitle>
                    <MenuConfigButton
                        buttonClick={props.configButtonClick}
                    ></MenuConfigButton>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <MenuPhoto
                        photoUrl={props.photoUrl}
                    ></MenuPhoto>

                    <MenuName
                        name={props.name}
                    >
                    </MenuName>
                </div>
            </div>

            <div className="w-4/5 h-1 bg-neutral rounded-full"></div>
        </div>
    )
}