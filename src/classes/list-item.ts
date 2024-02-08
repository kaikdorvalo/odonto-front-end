export class ListItem {
    label: string
    path: string
    styles: string
    active: boolean

    constructor(label: string, path: string, styles: string, active: boolean) {
        this.label = label;
        this.path = path;
        this.styles = styles;
        this.active = active
    }
}