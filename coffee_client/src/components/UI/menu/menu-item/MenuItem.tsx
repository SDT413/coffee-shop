import {FC} from 'react';
import Link from "next/link";
import {IMenuLink} from "@/components/interfaces/menu-item.interface";
import {Button} from "@chakra-ui/button";
import {useActions} from "@/hooks/useActions";
import {useConfig} from "@/hooks/useConfig";

interface IMenuItem {
    item: IMenuLink;
}
const MenuItem:FC<IMenuItem> = ({item}) => {
    const {setCategory} = useActions();
    const config = useConfig();
    return (
        <li>
            <Link href={item.path}>
                <div onClick={
                    () => {
                        if (config.category !== item.name) {
                            setCategory(item.name as any);
                        }
                    }
                }>
                {item.name}
                </div>
            </Link>
        </li>
    );
};

export default MenuItem;