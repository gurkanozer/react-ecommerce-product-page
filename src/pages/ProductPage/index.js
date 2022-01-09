import React from 'react';
import Slider from '../../components/Slider';
import Product from '../../components/Product';
import { ProductPageContainer } from './style';


const ProductPage = () => {
    return (
        <ProductPageContainer>
            <Slider/>
            <Product/>
        </ProductPageContainer>
    )
}

export default ProductPage;
