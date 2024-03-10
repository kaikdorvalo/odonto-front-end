import { MenuName } from "./menu-name"
import { MenuPhoto } from "./menu-photo"

interface props {
    photoUrl: string
    name: string
}

export const MenuHeader = (props: props) => {
    return (
        <div className="w-full flex flex-col items-center gap-4 p-4 bg-base-100
            lg:gap-8
        ">
            <div className="w-full flex flex-col items-center gap-4
                lg:gap-8 lg:p-4
            ">
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