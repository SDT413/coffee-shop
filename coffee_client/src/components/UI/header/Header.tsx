import React, {FC} from 'react';
import styles from './Header.module.scss';
import Cart from "@/components/UI/cart/Cart";
import Search from "@/components/UI/search/Search";
import Menu from "@/components/UI/menu/Menu";


const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Menu/>
            <Search/>
            <Cart/>
        </header>
    );
};

export default Header;