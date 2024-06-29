import {FC, useRef, useState} from 'react';
import styles from './Cart.module.scss';
import CartItem from "@/components/UI/cart/cart-item/Cart-item";
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from "@chakra-ui/modal";
import {Button} from "@chakra-ui/button";
import {useSelector} from "react-redux";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import PriceFormater from "@/components/utils/PriceFormater";
import {useCart} from "@/hooks/useCart";
import StripeEmbed from "@/components/stripe/StripeEmbed";

const Cart:FC = () => {
    const [IsOpen, setIsOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);
    const {cart, total} = useCart();
    const [showStripeEmbed, setShowStripeEmbed] = useState(false);
    return (
            <div className={styles.cart}>
                <button className={styles.heading} onClick={() => setIsOpen(!IsOpen)}>
                    <span className={styles.badge}>{cart.length}</span>
                    <span className={styles.title}>
                  Basket
              </span>
                </button>
                <Drawer isOpen={IsOpen} onClose={() => setIsOpen(false)}
                        placement="right"
                        finalFocusRef={btnRef}>
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Basket</DrawerHeader>
                        {showStripeEmbed && total ? <div className={styles.stripeEmbed}>
                            <StripeEmbed setShowStripeEmbed={setShowStripeEmbed} price={total}
                                         email={"test@gmail.com"}/>
                            </div>
                            :
                            <>
                        <DrawerBody>
                            <div className={styles.body}>
                                {cart.length ? cart.map(item => <CartItem item={item} key={item.product.id}/>) : <div className={styles.empty}>Your basket is empty</div>}
                            </div>
                        </DrawerBody>
                        <DrawerFooter justifyContent='space-between'
                                      borderTop='1px solid #e2e2e2'
                        >
                            <div className={styles.footer}>
                                <div>Total:</div>
                                <div>{PriceFormater(total)}</div>
                            </div>
                            <Button colorScheme={'green'} isDisabled={total <= 0}
                                    onClick={() => setShowStripeEmbed(true)}
                            >Checkout</Button>
                        </DrawerFooter>
                            </>
                        }
                    </DrawerContent>
                </Drawer>
            </div>
    );
};

export default Cart;