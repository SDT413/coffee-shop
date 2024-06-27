import {FC, useState} from 'react';
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductCard.module.scss';
import ProductCardInformation from "@/components/UI/product/product-card/product-card-info/ProductCardInformation";
import ProductCardImage from "@/components/UI/product/product-card/product-card-image/ProductCardImage";
import ProductCardVariations from "@/components/UI/product/product-card/product-card-variations/ProductCardVariations";

const ProductCard:FC<IProductProps> = ({product}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    return (
        <div className={styles.card}>
            <ProductCardInformation product={product} index={currentImageIndex} setIndex = {setCurrentImageIndex}/>
            <ProductCardImage product={product} index={currentImageIndex}/>
            <ProductCardVariations product={product} index={currentImageIndex} setIndex={setCurrentImageIndex}/>
        </div>
    );
};

export default ProductCard;