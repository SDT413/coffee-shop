import {FC} from 'react';
import Image from "next/image";
import styles from './Logo.module.scss';

const Logo:FC = () => {
    return (
        <div className={styles.menu}>
            <span className={styles.logo}>
                 <button>
                <Image src={'/images/logo.png'} width={50} height={50} alt={'logo'}/>
                </button>
            </span>
        </div>
    );
};

export default Logo;