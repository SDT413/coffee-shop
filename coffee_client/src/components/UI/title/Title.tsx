import {FC, PropsWithChildren} from 'react';
import styles from './Title.module.scss';
import cn from "clsx";

const Title:FC<PropsWithChildren<{ className?: string }>> = ({children, className}) => {
    return (
       <h1 className={cn(styles.title, className
           )}>
           {children}
       </h1>
    );
};

export default Title;