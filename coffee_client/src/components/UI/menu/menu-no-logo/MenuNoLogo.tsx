import {FC} from 'react';
import {menu} from "@/components/data/menu.data";
import styles from './MenuNoLogo.module.scss';
import MenuItemButton from "@/components/UI/menu/menu-item/MenuItemButton";

const MenuNoLogo:FC = () => {
    return (
        <div className={styles.menu}>
            <nav className={styles.navbar}>
                <ul className={styles.menu_list}>
                    {menu.map(item => <MenuItemButton item={item} key={item.path}/>)}
                </ul>
            </nav>
        </div>
    );
};

export default MenuNoLogo;