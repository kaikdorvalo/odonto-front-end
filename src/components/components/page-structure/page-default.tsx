import { MenuLeft } from "../menu/menu-left"
import { MenuListConfig } from "../../../config/menu-list-config"
import { useEffect } from "react"

interface props {
    photoUrl: string,
    name: string
    children: JSX.Element
    defaultSelectedIndex: number
}

export const PageDefault = (props: props) => {

    let listItems= MenuListConfig.items;

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = 'unset';
        }
    }, [])

    return (
        <div className="flex flex-col font-poppins bg-base-200
            lg:flex-row
        ">
            <aside className="w-full bg-base-100 flex
                lg:w-1/4 lg:bg-base-200 lg:h-screen
            ">
                <MenuLeft
                    photoUrl={props.photoUrl}
                    name={props.name}
                    listItems={listItems}
                    defaultSelectedIndex={props.defaultSelectedIndex}
                ></MenuLeft>
            </aside>
            <div className="w-full
                lg:w-3/4 lg:h-screen lg:p-8 lg:overflow-x-auto
            ">
                {props.children}
            </div>
        </div>
    )
}