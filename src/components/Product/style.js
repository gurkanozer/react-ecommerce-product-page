import styled from 'styled-components';

export const ProductContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    padding:1.6rem 2.2rem;
    @media (min-width:768px){
        padding:0;
        max-width:44.4rem;
        margin:0 auto;
    }
`
export const ProductBrand = styled.a`
    text-transform:uppercase;
    font-size:1.2rem;
    color:${({ theme }) => theme.colors.orange};
    letter-spacing:0.15rem;
    margin-bottom:1.6rem;
    @media (min-width:768px){
        font-size:1.4rem;
        font-weight:700;
    }
`
export const ProductTitle = styled.h1`
    font-size:2.8rem;
    margin-bottom:1.6rem;
    @media (min-width:768px){
        font-size:4.2rem;
    }
`
export const ProductDescription = styled.p`
    color:${({ theme })=> theme.colors.darkGrayishBlue};
    line-height:2.4rem;
    font-size:1.5rem;
    @media (min-width:768px){
        font-size:1.6rem;
    }
    `
export const ProductPriceContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:3.6rem 0;
    @media (min-width:576px){
        align-items:flex-start;
        flex-direction:column;
    }
`
export const ProductCurrentPrice = styled.h4`
    font-size:2.4rem;
    @media (min-width:576px){
        margin-bottom:1rem;
    }
    @media (min-width:768px){
        font-size:2.8rem;
    }
`
export const ProductDiscount = styled.span`
    font-size:1.6rem;
    padding:0.2rem 0.5rem;
    margin-left:2rem;
    background:${({ theme })=>theme.colors.paleOrange};
    color:${({ theme })=>theme.colors.orange};
    border-radius:0.6rem;
    @media (min-width:768px){
        padding:0.4rem 0.8rem;
    }
`
export const ProductPrice = styled.span`
    font-size:1.6rem;
    color:${({theme})=>theme.colors.grayishBlue};
    text-decoration:line-through
`
export const ProductAddContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    @media (min-width:576px){
        flex-direction:row;
        justify-content:space-between;
    }
`
export const ProductCountContainer = styled.div`
    width:100%;
    border-radius:1rem;
    background:${({theme})=>theme.colors.lightGrayishBlue};
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:1.6rem;
    @media (min-width:576px){
        margin-bottom:0;
        margin-right:2rem;
    }
    @media (min-width:768px){
        max-width:15.6rem;
    }
`
export const ProductMinusButton = styled.button`
    width:5.6rem;
    height:5.6rem;
    background: url(${process.env.PUBLIC_URL}/images/icon-minus.svg) no-repeat center center;
    background-size:1.6rem;
    &:hover{
        opacity:0.75;
    }
`
export const ProductPlusButton = styled.button`
    width:5.6rem;
    height:5.6rem;
    background: url(${process.env.PUBLIC_URL}/images/icon-plus.svg) no-repeat center center;
    background-size:1.6rem;
    &:hover{
        opacity:0.75;
    }
`
export const ProductCountInput = styled.input`
    width:5.6rem;
    line-height:5.6rem;
    border:none;
    background:none;
    font-size:2rem;
    text-align:center;
`
export const ProductAddButton = styled.button`
    width:100%;
    
    background:${({theme})=> theme.colors.orange};
    border-radius:1rem;
    font-size:1.6rem;
    color:${({theme})=> theme.colors.white};
    padding:1.6rem;
    svg{
        width:1.8rem;
        color:${({theme})=> theme.colors.white};
        margin-right:1rem;
    }
    &:hover{
        opacity:0.75;
    }
    &.disabled{
        cursor:not-allowed;
    }
    @media (min-width:576px){
        max-width:27.2rem;
    }
`