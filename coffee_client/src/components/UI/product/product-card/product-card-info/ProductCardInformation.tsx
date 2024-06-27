import {Dispatch, FC, SetStateAction} from 'react';
import styles from './ProductCardInformation.module.scss';
import {IProductProps} from "@/components/interfaces/Product.interface";
import Image from "next/image";
import cn from "clsx";

interface IProductCardInformationProps extends IProductProps {
    index: number,
    setIndex: Dispatch<SetStateAction<number>>
}
const ProductCardInformation:FC<IProductCardInformationProps> = ({product, index, setIndex}) => {

    return (
        <div className={styles.info}>
            <h2>
                {product.name}
            </h2>
            <div>
                 <p>
                    {product.description}
                </p>
            </div>
            {product.images.map((image, img_index) => <button key = {image} onClick={() => setIndex(img_index)} className={
                cn(styles.image, {
                    [styles.active]: img_index === index
                }, styles.image_desktop
                )
                }>
                <Image src={image} width={50} height={50} alt={'image'}/>
            </button>
            )}
        </div>
    );
};

export default ProductCardInformation;