import React, {FC, PropsWithChildren} from 'react';
import Header from "@/components/UI/header/Header";
import styles from './Layout.module.scss';
import Meta from "@/components/UI/meta/Meta";
import {IMeta} from "@/components/UI/meta/meta.interface";

const Layout:FC<PropsWithChildren<IMeta>> = ({children, ...rest}) => {
    return (
        <>
            <Meta {...rest}/>
        <div className={styles.layout}>
           <main>
               <Header/>
              <section className={styles.content}>
                  {children}
                </section>
              </main>
        </div>
        </>
    );
};

export default Layout;