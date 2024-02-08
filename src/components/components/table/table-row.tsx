import { TableRowItem } from "../../../classes/table-panel/table-row"

interface props {
    item: TableRowItem;
}

export const TableRow = (props: props) => {

    return (
        <tr>
            <td className="p-3">{props.item.label}</td>
            <td className="p-3">{props.item.type}</td>
            <td className="p-3">{props.item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td className="p-3">{props.item.date.getDay().toString().padStart(2, '0') + '/' + (props.item.date.getMonth()+1).toString().padStart(2, '0') + '/' + props.item.date.getFullYear().toString().padStart(2, '0')}</td>
        </tr>
    )
}