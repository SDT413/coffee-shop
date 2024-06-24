import {FC} from 'react';
import Link from "next/link";
import {IMenuLink} from "@/components/interfaces/menu-item.interface";

interface IMenuItem {
    item: IMenuLink;
}
const MenuItem:FC<IMenuItem> = ({item}) => {
    return (
        <li>
            <Link href={item.path}>
                {item.name}
            </Link>
        </li>
    );
};

export default MenuItem;