import {FC} from 'react';
import {IProduct} from "@/components/interfaces/Product.interface";
import ProductSliderItem from "@/components/UI/catalog/product_slider/product_slider-item/ProductSliderItem";
import styles from './ProductSlider.module.scss';

const ProductsSlider:FC<{products: IProduct[]}> = ({products}) => {
    return (
        <div className={styles.carousel}>
            {
                products.map((product,index) => (
                    <ProductSliderItem key={product.id} product={product} index={index} productsCount={products.length}/>
                ))
            }
        </div>
    );
};

export default ProductsSlider;