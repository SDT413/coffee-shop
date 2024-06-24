import {FC} from 'react';
import Image from "next/image";
import styles from './ProductSliderItemHeader.module.css';
import {IProductSliderItemHeader} from "@/components/interfaces/product_slider.interface";
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import {useActions} from "@/hooks/useActions";

const ProductSliderSelectedItemHeader:FC<IProductSliderItemHeader> = ({product, isActive, onSelectItem, productsCount}) => {
    const {nextItem, prevItem} = useActions();
    return (
            <div className={styles.itemHeader}>
                {isActive && (
                    <div className={styles.arrows}>
                    <button onClick={() => prevItem(productsCount)} className={styles.arrow} aria-label={'Previous item'}>
                        <ChevronLeftIcon fontSize={'3rem'}/>
                    </button>
                    <button onClick={() => nextItem(productsCount)} className={styles.arrow} aria-label={'Next item'}>
                        <ChevronRightIcon fontSize={'3rem'}/>
                    </button>
                    </div>
                )}
                <button onClick={onSelectItem}
                    className={styles.image} aria-label={product.name}>
                <Image src={product.images[0]} alt={product.name} width={320} height={320} draggable={false}/>
                </button>
            </div>
    );
};

export default ProductSliderSelectedItemHeader;