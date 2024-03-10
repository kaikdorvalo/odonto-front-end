import { Dispatch, SetStateAction } from "react";
import "./hamburger.css"

interface props {
    setMenuActive: Dispatch<SetStateAction<boolean>>
    menuActive: boolean
}

export const MenuButton = (props: props) => {

    const buttonClick = () => {
        const html = document.querySelector("html");
        if (html) {
            if (props.menuActive) {
                html.style.overflow = 'unset';
                props.setMenuActive(!props.menuActive);
            } else {
                if (!props.menuActive) {
                    html.style.overflow = "hidden";
                    html.scrollTop = 0
                    props.setMenuActive(!props.menuActive);
                }
            }
        }
    }

    return (
        <button onClick={buttonClick} className={`hamburger--squeeze outline-none ${props.menuActive? 'is-active' : ''}`}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}