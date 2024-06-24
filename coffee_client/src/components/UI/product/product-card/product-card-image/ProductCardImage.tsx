import {FC} from 'react';
import {IProduct, IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductCardImage.module.scss';
import Image from "next/image";
import PriceFormater from "@/components/utils/PriceFormater";

interface IProductCardImageProps extends IProductProps {
    index: number
}
const ProductCardImage:FC<IProductCardImageProps> = ({product, index}) => {
    return (
        <div className={styles.image}>
            <div className={styles.main}>
            <Image src={product.images[index]} width={250} height={250} alt={'image'}/>
            </div>
            <div className={styles.price}>
                {PriceFormater(product.price)}
            </div>
        </div>
    );
};

export default ProductCardImage;