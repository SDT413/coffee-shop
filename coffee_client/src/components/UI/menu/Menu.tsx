import {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {menu} from "@/components/data/menu.data";
import MenuItem from "@/components/UI/menu/menu-item/MenuItem";
import styles from './Menu.module.scss';

const Menu:FC = () => {
    return (
        <div className={styles.menu}>
            <Link href={'/'}>
                <Image src={'/images/logo.png'} width={100} height={100} alt={'logo'}/>
            </Link>
            <nav>
                <ul>
                {menu.map(item => <MenuItem item={item} key={item.path}/>)}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;