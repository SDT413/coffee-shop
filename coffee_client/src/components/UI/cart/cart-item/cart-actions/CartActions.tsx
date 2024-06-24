import {FC} from 'react';
import {HStack, Input, useNumberInput} from "@chakra-ui/react";
import {AddIcon, MinusIcon, PlusSquareIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/button";
import {ICartItem} from "@/components/interfaces/cart-item.interface";
import {useActions} from "@/hooks/useActions";

const CartActions:FC<{item: ICartItem}> = ({item}) => {
    const {getInputProps, getIncrementButtonProps, getDecrementButtonProps} = useNumberInput({
        step: 1,
        defaultValue: item.products_quantity,
        min: 1,

    })
    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps({isReadOnly: true});
    const {removeCoffee,changeQuantity} = useActions();
    return (
        <div className='mt-3'>
            <HStack maxW = '320px'>
                <Button {...dec} onClick={() => {  changeQuantity({id: item.id, type: "decrease"}) }}>
                    <MinusIcon color={'red.500'} fontSize={13}/>
                </Button>
                <Input {...input} focusBorderColor={'green.500'} _hover={{cursor: 'default'}}/>
                <Button {...inc} onClick={
                    () => {  changeQuantity({id: item.id, type: "increase"}) }}> <AddIcon color={'green.500'} fontSize={13}/></Button>
            </HStack>
            <Button variant='solid' color ='#F23C3D' marginTop={2} size="sm" opacity={0.8} onClick={() => removeCoffee(
                {
                    id: item.id,
                    product: item.product,
                    size: item.size
                }
            )}>
                Remove
            </Button>
        </div>
    );
};

export default CartActions;