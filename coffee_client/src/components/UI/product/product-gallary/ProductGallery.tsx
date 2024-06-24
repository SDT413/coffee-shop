import {FC} from 'react';
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductGallery.module.scss';
import {ChevronLeftIcon, ChevronRightIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {useProductGallery} from "@/hooks/useProductGallery";
import cn from "clsx";
const ProductGallery:FC<IProductProps> = ({product}) => {
    const productId = product.id;
    const {nextProduct, prevProduct} = useProductGallery(productId);
    return (
        <div className={styles.nav}>
            <Link href={ `/products/${prevProduct}`} className={cn({
                disabled : !prevProduct

            })}>
                    <ChevronLeftIcon fontSize={'3rem'} color='#333'/>
            </Link>
            <Link href={`/products/${nextProduct}`} className={cn({
                disabled : !nextProduct
            })}>
                    <ChevronRightIcon fontSize={'3rem'} color='#333'/>
            </Link>
        </div>
    );
};

export default ProductGallery;