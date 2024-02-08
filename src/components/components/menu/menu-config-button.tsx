import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear } from "@fortawesome/free-solid-svg-icons"

interface props {
    buttonClick: () => void
}

export const MenuConfigButton = (props: props) => {


    return (
        <button onClick={props.buttonClick} className="outline-none">
            <FontAwesomeIcon icon={faGear} size="lg"/>
        </button>
    )
}