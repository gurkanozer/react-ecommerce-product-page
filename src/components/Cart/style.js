import styled from 'styled-components';

export const CartContainer = styled.div`
    width:calc(100% - 1.4rem);
    max-width:360px;
    position:absolute;
    top:-100vh;
    background:${({theme})=>theme.colors.white};
    border-radius:1rem;
    box-shadow: 1px 1px 4px 0 ${({theme})=>theme.colors.grayishBlue};
    z-index:10;
    
    &.active{
        top:7.6rem;
        right:0.7rem;
        
        @media (min-width:768px){
            top:9.2rem;
        }
    }
    `
export const CartHeader = styled.div`
    width:100%;
    height:6.4rem;
    padding:2.4rem;
    border-bottom:1px solid ${({theme})=>theme.colors.grayishBlue};
    `
export const CartTitle = styled.h4`
    text-align:left;
    font-size:1.6rem;
    color:${({theme})=>theme.colors.darkBlue};
`
export const CartBody = styled.div`
    width:100%;
    min-height:18.8rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:0 2.4rem 2.4rem;
`
export const CartText = styled.p`
    color:${({theme})=>theme.colors.darkGrayishBlue};
    font-weight:700;
    font-size:1.6rem;
    font-family:${({ theme }) => theme.font.family};
`

export const CartItem = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:2.4rem 0;
`
export const ItemImg = styled.img`
    width:5rem;
    border-radius:0.6rem;
`
export const ItemDetails = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding:0 1.6rem;
    `
export const ItemTitle = styled.h4`
    color:${({theme})=>theme.colors.darkGrayishBlue};
    font-size:1.6rem;
    font-weight:400;
    margin-bottom:0.6rem;
`
export const ItemPriceContainer = styled.div`
    font-size:1.6rem;
    color:${({theme})=>theme.colors.darkGrayishBlue};
`
export const ItemCount = styled.span`
    padding:0 0.4rem;
`
export const ItemTotalPrice = styled.span`
    color:${({theme})=> theme.colors.darkBlue};
    font-weight:700;
`
export const ItemDelete = styled.a`
    width:2rem;
    height:2rem;
    background: url(${process.env.PUBLIC_URL}/images/icon-delete.svg) no-repeat center center;
    background-color:${({ theme }) => theme.colors.white};
    background-size:1.4rem;
    cursor:pointer;
`

export const Checkout = styled.a`
    width:100%;
    background: ${({theme})=>theme.colors.orange};
    color: ${({theme})=>theme.colors.white};
    padding:1.6rem;
    font-size:1.6rem;
    border-radius:1rem;
    text-align:center;
    &:hover{
        opacity:0.6;
    }
`