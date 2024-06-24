import React, {FC} from 'react';
import styles from '../Cart.module.scss';
import Image from "next/image";
import {ICartItem} from "@/components/interfaces/cart-item.interface";
import CartActions from "@/components/UI/cart/cart-item/cart-actions/CartActions";
import PriceFormater from "@/components/utils/PriceFormater";

interface ICartItemProps {
    item: ICartItem;
}
const CartItem:FC<ICartItemProps> = ({item}) => {
    return (
        <div className={styles.item}>
            <Image src={item.product.images[0]} width={100} height={100} alt={item.product.name}/>
            <div>
        <div className={styles.name}> {item.product.name} </div>
        <div className={styles.price}>
            {PriceFormater(item.product.price)}
        </div>
                <div className={styles.size}> {item.size} </div>
                <CartActions item={item}/>
            </div>
        </div>
    );
};

export default CartItem;