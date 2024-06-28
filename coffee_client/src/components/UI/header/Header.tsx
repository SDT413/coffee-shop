import React, {FC} from 'react';
import styles from './Header.module.scss';
import Cart from "@/components/UI/cart/Cart";
import Search from "@/components/UI/search/Search";
import Menu from "@/components/UI/menu/Menu";
import MenuNoLogo from "@/components/UI/menu/menu-no-logo/MenuNoLogo";
import Logo from "@/components/UI/menu/logo/Logo";


const Header: FC = () => {
    return (
        <>
        <header className={styles.header}>
            <Menu/>
            <Search/>
            <Cart/>
        </header>
            <header className={styles.header_mobile}>
                <Logo/>
                <Search/>
                <Cart/>
            </header>
            <MenuNoLogo/>
        </>
    );
};

export default Header;