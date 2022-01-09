import React,{useContext} from 'react';
import {CartContainer, CartHeader, CartTitle, CartBody, CartText,
    CartItem, ItemImg, ItemDetails, ItemTitle, ItemPriceContainer,
    ItemCount, ItemTotalPrice, ItemDelete, Checkout
} from './style';
import { GlobalContext } from '../../context/globalState';

const Cart = ({isActive=false}) => {
    const {cart, removeFromCart} = useContext(GlobalContext);
    
    const totalPriceHandler = (count, price) => {
        return count * price;
    }

    const removeFromCartHandler = (item) => {
        removeFromCart(item)
    }
    return (
        <CartContainer className={isActive?'active':''}>
            <CartHeader>
                <CartTitle>Cart</CartTitle>
            </CartHeader>
            <CartBody>
                {
                    cart.length == 0 ?
                        <CartText>Your cart is empty.</CartText>
                    :
                    <>
                       {
                           cart.map((item, index)=>(
                            <CartItem key={index}>
                                <ItemImg
                                src={`${process.env.PUBLIC_URL}/images/image-product-1.jpg`}
                                alt="product-image-1"
                                />
                                <ItemDetails>
                                    <ItemTitle>{item.title}</ItemTitle>
                                    <ItemPriceContainer>${item.price} x<ItemCount>{item.count}</ItemCount> <ItemTotalPrice>${totalPriceHandler(item.count, item.price)}</ItemTotalPrice></ItemPriceContainer>
                                </ItemDetails>
                                <ItemDelete onClick={()=>removeFromCartHandler(item)}></ItemDelete>
                            </CartItem>
                           ))
                       }
                    
                    <Checkout href="#">Checkout</Checkout>
                    </>

                }
                
            </CartBody>
        </CartContainer>
    )
}

export default Cart;
