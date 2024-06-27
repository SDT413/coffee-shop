import {Dispatch, FC, SetStateAction, useState} from 'react';
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductCardVariations.module.scss';
import ProductRating from "@/components/UI/product/product-rating/ProductRating";
import {TypeSize} from "@/store/cart/cart.types";
import ProductSizeSelector from "@/components/UI/product/product-size-selector/ProductSizeSelector";
import AddToBasketButton from "@/components/UI/product/product-slider-button/AddToBasketButton";
import cn from "clsx";
import Image from "next/image";

interface IProductCardInformationProps extends IProductProps {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>
}

const ProductCardVariations : FC<IProductCardInformationProps> = ({product, setIndex, index}) => {
    const [selectedSize, setSelectedSize] = useState<TypeSize>('short')
    return (
        <div className={styles.variations}>
            <ProductRating product={product}/>
            <ProductSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} variant={'medium'}/>
            {product.images.map((image, img_index) => <button key = {image} onClick={() => setIndex(img_index)} className={
                    cn(styles.image, {
                            [styles.active]: img_index === index
                        }, styles.image_mobile
                    )
                }>
                    <Image src={image} width={50} height={50} alt={'image'}/>
                </button>
            )}
            <AddToBasketButton selectedSize={selectedSize} product={product}/>
        </div>
    );
};

export default ProductCardVariations;