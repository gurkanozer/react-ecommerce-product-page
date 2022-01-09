import React, { useContext, useState, useEffect } from 'react';
import Slider from '../../components/Slider';
import Product from '../../components/Product';
import { ProductPageContainer } from './style';
import { GlobalContext } from '../../context/globalState';


const ProductPage = () => {
    const {cart} = useContext(GlobalContext);
    return (
        <ProductPageContainer>
            <Slider/>
            <Product/>
        </ProductPageContainer>
    )
}

export default ProductPage;
