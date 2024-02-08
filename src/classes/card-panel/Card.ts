
export class CardItem {
    title: string
    value: number
    subtitle?: string

    constructor(title: string, value: number, subtitle?: string) {
        this.title = title;
        this.value = value;
        this.subtitle = subtitle;
    }
}