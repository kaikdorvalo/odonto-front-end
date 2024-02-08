import { Card } from "./card"
import { CardItem } from "../../../classes/card-panel/Card"

interface props {
    cardItems: CardItem[]
}

export const CardList = (props: props) => {

    return (
        <div className="grid grid-cols-3 gap-[0.1rem] rounded-md overflow-hidden">
            {props.cardItems.map((card) => {
                return (
                    <Card
                        cardItem={card}
                    ></Card>
                )
            })}
        </div>
    )
}