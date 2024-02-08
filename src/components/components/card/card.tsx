import { CardItem } from "../../../classes/card-panel/Card"

interface props {
    cardItem: CardItem
}

export const Card = (props: props) => {

    return (
        <div className="bg-base-100 p-3 flex flex-col gap-1">
            <p className="text-md">{props.cardItem.title}</p>
            <strong className={`text-4xl font-bold`}>{props.cardItem.value}</strong>
            <p className="text-sm">{props.cardItem.subtitle}</p>
        </div>
    )
}