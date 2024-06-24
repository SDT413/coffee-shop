import {FC} from 'react';
import {Button} from "@chakra-ui/button";
import styles from './AddToBasketButton.module.scss';
import {useActions} from "@/hooks/useActions";
import {IProduct} from "@/components/interfaces/Product.interface";
import {COLORS} from "@/config/color.config";
import {TypeSize} from "@/store/cart/cart.types";
import {useCart} from "@/hooks/useCart";
interface IAddToBasketButton {
    selectedSize: TypeSize;
    product: IProduct;
}
const AddToBasketButton:FC<IAddToBasketButton> = ({selectedSize, product}) => {
    const {addToCart, removeCoffee} = useActions();
    const {cart} = useCart();
    const isExistInCart = cart.some(item => item.product.id === product.id && item.size === selectedSize)
    return (
        <div className='text-center'>
      <Button className={styles.button} onClick = {() =>
        isExistInCart ? removeCoffee(
                {
                    id: product.id,
                    product: product,
                    size: selectedSize
                }
            ) :
          addToCart({
          product,
          products_quantity: 1,
          size: selectedSize
      })} color={COLORS.green} borderRadius={20}>
            {isExistInCart ? 'Remove from basket' : 'Add to basket'}
        </Button>
        </div>


    );
};

export default AddToBasketButton;