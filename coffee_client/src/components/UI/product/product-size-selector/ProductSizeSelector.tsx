import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './ProductSizeSelector.module.scss';
import {Button} from "@chakra-ui/button";
import {TypeSize} from "@/store/cart/cart.types";
import cn from 'clsx';
import {useCart} from "@/hooks/useCart";

interface IVariantSelector {
    selectedSize: TypeSize;
    setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
    variant?: 'small' | 'medium';
}
const ProductSizeSelector:FC<IVariantSelector> = ({selectedSize, setSelectedSize, variant='small'}) => {
    const sizes:TypeSize[] = ['short', 'tall','grande', 'venti'];
    const {cart} = useCart();
    return (
       <div className={
           cn(
                styles.variants,
                {
                    [styles.small]: variant === 'small',
                    [styles.medium]: variant === 'medium'
                }

           )
         }>
                    {sizes.map(size => (
                        <Button key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(styles.variant, {
                                [styles.active]: size === selectedSize,
                                [styles.disabled]: cart.some(item => item.size === size)
                            })}
                            disabled={cart.some(item => item.size === size)}
                            colorScheme="teal"
                            variant="outline"
                        >
                            {size}
                        </Button>
                    )
                    )}

         </div>

    );
};

export default ProductSizeSelector;