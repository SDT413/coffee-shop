import {FC, useState} from 'react';
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductRating.module.scss';
import {Rating} from "react-simple-star-rating";

const ProductRating:FC<IProductProps> = ({ product }) => {
    const [rating, setRating] = useState<number>(Math.round(product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length) || 0);
    const handleRating = (e: number) => {
        setRating(e);
    }
    const onPointerEnter = (e: number) => {
        console.log(e);
    }
    const onPointerLeave = (e: number) => {
        console.log(e);
    }
    const onPointerMove = (e: number) => {
        console.log(e);
    }
    return (
        <div className={styles.rating}>
            <span>
                Reviews:
            </span>
        <Rating readonly={true}
       transition={true}
       allowFraction={true}
       size={32}
        SVGstyle={
            {
                display: "inline-block",
            }
        }
                initialValue={rating}
        />

        </div>
    );
};

export default ProductRating;