import { TableHead } from "./table-head"
import { TableRow } from "./table-row"
import { TableRowItem } from "../../../classes/table-panel/table-row"

interface props {
    head: string[],
    rows: TableRowItem[]
}

export const Table = (props: props) => {
    return (
        <table className="bg-base-100 rounded-md">
            <TableHead
                items={props.head}
            />

            {props.rows.map((item) => {
                return (
                    <TableRow
                        item={item}
                    />
                )
            })}
        </table>
    )
}