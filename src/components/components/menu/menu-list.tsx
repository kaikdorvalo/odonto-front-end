import { MenuListItem } from "./menu-list-item"
import { ListItem } from "../../../classes/list-item";

interface props {
    listItems: ListItem[]
    defaultSelectedIndex: number
}

export const MenuList = (props: props) => {

    let items = props.listItems;
    resetAllStyles();
    selectItem(props.defaultSelectedIndex);

    function resetAllStyles() {
        items.forEach((item) => {
            item.styles = '',
                item.active = false;
        })
    }

    function selectItem(index: number) {
        items[index].active = true;
        if (items.length != 1 && items.length != 0) {
            if (index > 0 && index < items.length - 1) {
                items[index - 1].styles = 'rounded-br-full';
                items[index + 1].styles = 'rounded-tr-full';
            }

            if (index > 0) {
                items[index - 1].styles = 'rounded-br-full';
            }

            if (index == 0) {
                items[index + 1].styles = 'rounded-tr-full'
            }

            if (index === items.length - 1) {
                items[index - 1].styles = 'rounded-br-full';
            }
        }

        items[index].styles = 'bg-base-100 lg:bg-base-200 lg:rounded-tl-full lg:rounded-bl-full'
        items[index].active = true

    }

    return (
        <div className="w-full max-h-full bg-base-100 py-8 flex
            lg:justify-end
        ">
            <ul className="w-full max-h-full flex flex-col gap-2
                lg:bg-base-100 lg:w-11/12 lg:gap-0
            ">
                {items.map((item, index) => {
                    return (
                        <MenuListItem key={index}
                            listItem={item}
                            listItemIndex={index}
                        >
                        </MenuListItem>
                    )
                }
                )}
            </ul>
        </div>
    )
}