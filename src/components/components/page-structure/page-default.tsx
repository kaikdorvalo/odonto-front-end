import { MenuLeft } from "../menu/menu-left"
import { MenuListConfig } from "../../../config/menu-list-config"

interface props {
    photoUrl: string,
    name: string
    children: JSX.Element
    defaultSelectedIndex: number
}

export const PageDefault = (props: props) => {

    let listItems= MenuListConfig.items;

    const handleConfigButtonClick = () => {
        alert('config');
    }

    return (
        <div className="flex font-poppins bg-base-200">
            <aside className="w-1/4 h-screen bg-base-200">
                <MenuLeft
                    photoUrl={props.photoUrl}
                    name={props.name}
                    listItems={listItems}
                    defaultSelectedIndex={props.defaultSelectedIndex}
                    configButtonClick={handleConfigButtonClick}
                ></MenuLeft>
            </aside>
            <div className="w-3/4 h-screen p-8 overflow-x-auto">
                {props.children}
            </div>
        </div>
    )
}