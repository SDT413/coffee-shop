import {FC} from 'react';
import Link from "next/link";
import {IMenuLink} from "@/components/interfaces/menu-item.interface";
import {useActions} from "@/hooks/useActions";
import {useConfig} from "@/hooks/useConfig";
import {Button} from "@chakra-ui/button";

interface IMenuItem {
    item: IMenuLink;
}
const MenuItemButton:FC<IMenuItem> = ({item}) => {
    const {setCategory} = useActions();
    const config = useConfig();
    return (
        <li>
            <Link href={item.path}>
                <Button onClick={
                    () => {
                        if (config.category !== item.name) {
                            setCategory(item.name as any);
                        }
                    }
                }>
                    {item.name}
                </Button>
            </Link>
        </li>
    );
};

export default MenuItemButton;