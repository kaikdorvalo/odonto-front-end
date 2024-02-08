export class TableRowItem {
    label: string
    type: string
    value: number
    date: Date

    constructor(label: string, type: string, value: number, date: Date) {
        this.label = label;
        this.type = type;
        this.value = value;
        this.date = date;
    }
}