import { useState } from "react";
import { CardList } from "../components/components/card/card-list";
import { PageDefault } from "../components/components/page-structure/page-default";
import { CardItem } from "../classes/card-panel/Card";
import { TableHeadConfig } from "../config/table-head-config";
import { TableRowItem } from "../classes/table-panel/table-row";
import { Table } from "../components/components/table/table";


export const Panel = () => {

    const [cardItems, setCardItems] = useState<CardItem[]>([
        new CardItem(
            "Agendados hoje",
            12,
            "20% menos que ontem"
        ),
        new CardItem(
            "Já atendidos",
            5,
        ),
        new CardItem(
            "Para atender",
            7,
        ),
    ]);

    const TableRows: TableRowItem[] = [
        new TableRowItem('Compra de casa', 'saída', 334.68, new Date()),
        new TableRowItem('Compra de casa', 'saída', 334.68, new Date()),
        new TableRowItem('Compra de casa', 'saída', 334.68, new Date()),
        new TableRowItem('Compra de casa', 'saída', 334.68, new Date()),
        new TableRowItem('Compra de casa', 'saída', 334.68, new Date()),
    ]

    return (
        <PageDefault
            photoUrl="https://static1.topspeedimages.com/wordpress/wp-content/uploads/jpg/201902/volkswagen-jetta-gli-150.jpg"
            name="Kaik Dorvalo"
            defaultSelectedIndex={0}
        >
            <div className="flex flex-col gap-5">
                <CardList 
                    cardItems={cardItems}
                />

                <Table
                    head={TableHeadConfig}
                    rows={TableRows}
                >
                </Table>
            </div>
        </PageDefault>
    )
}