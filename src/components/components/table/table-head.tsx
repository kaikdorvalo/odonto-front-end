
interface props {
    items: string[]
}

export const TableHead = (props: props) => {
    
    return (
        <tr>
            {props.items.map((item) => {
                return (
                    <th className="text-start p-3">{item}</th>
                )
            })}
        </tr>
    )
}