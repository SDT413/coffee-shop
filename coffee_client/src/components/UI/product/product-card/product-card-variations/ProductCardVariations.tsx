import {FC, useState} from 'react';
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductCardVariations.module.scss';
import ProductRating from "@/components/UI/product/product-rating/ProductRating";
import {TypeSize} from "@/store/cart/cart.types";
import ProductSizeSelector from "@/components/UI/product/product-size-selector/ProductSizeSelector";
import AddToBasketButton from "@/components/UI/product/product-slider-button/AddToBasketButton";


const ProductCardVariations :FC<IProductProps>= ({product}) => {
    const [selectedSize, setSelectedSize] = useState<TypeSize>('short')
    return (
        <div className={styles.variations}>
            <ProductRating product={product}/>
            <ProductSizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} variant={'medium'}/>
            <AddToBasketButton selectedSize={selectedSize} product={product}/>
        </div>
    );
};

export default ProductCardVariations;