import {FC, useState} from 'react';
import styles from '../ProductSlider.module.scss';
import cn from 'clsx'
import AddToBasketButton from "@/components/UI/product/product-slider-button/AddToBasketButton";
import ProductSizeSelector from "@/components/UI/product/product-size-selector/ProductSizeSelector";
import {TypeSize} from "@/store/cart/cart.types";
import {IProductSliderItem} from "@/components/interfaces/product_slider.interface";
import ProductSliderSelectedItemHeader
    from "@/components/UI/catalog/product_slider/product_slider-item/product_slider-selected-item-header/ProductSliderSelectedItemHeader";
import {useProductSlider} from "@/hooks/useProductSlder";
import {useActions} from "@/hooks/useActions";
import {motion} from "framer-motion";
import Link from "next/link";


const ProductSliderItem:FC<IProductSliderItem> = ({product, index, productsCount}) => {
    const [selectedSize, setSelectedSize] = useState<TypeSize>('short');
    const {selectedItemIndex} = useProductSlider();
    const {selectItem} = useActions();
    let isActive = index === selectedItemIndex;
    return (
        <motion.div className={cn(styles.item, {
            [styles.active]: isActive
        })}
             aria-label={product.name}
             role={'button'}
             initial={{scale:1, opacity: 0.9}}
             animate={isActive ? {scale:1.12, opacity: 1} : {scale:1, opacity: 0.9}}
             transition={{duration:0.3, ease:'easeInOut'}}>
            <div>
                <ProductSliderSelectedItemHeader onSelectItem={
                    () => selectItem(index)
                } product={product} isActive={isActive} productsCount={productsCount}/>
            <button className={styles.heading}  onClick={() => selectItem(index)}>
                <span>
                {product.name}
                </span>
            </button>
            {isActive ?
                <>
                    <ProductSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize}/>
                    <AddToBasketButton product={product} selectedSize={selectedSize}/>
                    <Link href={`/products/${product.slug}`} className={styles.link}>
                        More details
                    </Link>
                </> :
            <div className={styles.description}>{product.description}</div>
            }
            </div>
        </motion.div>
    );
};

export default ProductSliderItem;