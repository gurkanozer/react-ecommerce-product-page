import styled from 'styled-components';

export const HeaderContainer = styled.div`
    max-width:114.8rem;
    margin:0 auto;
    position:relative;
`
export const HeaderInner = styled.div`
    width:100%;
    height:6.8rem;
    display:flex;
    padding:0 2.4rem;
    align-items:center;
    justify-content:space-between;
    @media (min-width:768px){
        height:11.2rem;
        border-bottom:1px solid ${({theme})=>theme.colors.grayishBlue};
    }
    @media (min-width:1148px){
        padding:0;
    }
`
export const HeaderNav = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    `
export const ToggleButton = styled.button`
    padding:0;
    display:flex;
    margin-top:0.4rem;
    margin-right:1.6rem;
    @media (min-width:768px){
        display:none;
    }
`
export const MenuIcon = styled.img`
    width:1.6rem;
    height:1.6rem;
    @media (min-width:768px){
        width:2rem;
        height:2rem;
    }
`
export const Brand = styled.a`

`
export const BrandImg = styled.img`
    width:auto;
    height:2rem;
`
export const HeaderProfile = styled.div`
    display:flex;
    align-items:center;
    justify-content:right;
`
export const CartToggleContainer = styled.div`
    position:relative;
    margin-right:2rem;
    @media (min-width:768px){
        margin-right:4.4rem;
    }
    `
export const CartBadge = styled.span`
    background:${({theme})=>theme.colors.orange};
    color:${({theme})=>theme.colors.white};
    position:absolute;
    top:-0.6rem;
    right:-0.8rem;
    padding:0 0.5rem;
    font-size:1.2rem;
    border-radius:0.6rem;
    display:none;
    &.active{
        display:block;
    }

`
export const CartToggle = styled.button`
    width:2.2rem;
    height:2rem;
    & svg{
        color:${({theme})=>theme.colors.darkGrayishBlue};
    }
    &:hover{
        svg{
            color:${({theme})=>theme.colors.darkBlue};
        }
    }
`
export const Profile = styled.button`
    width:2.6rem;
    height:2.6rem;
    border-radius:50%;
    @media (min-width:768px){
        width:5rem;
        height:5rem;
    }
    &:hover{
        border:2px solid ${({theme})=>theme.colors.orange};
    }

`
export const ProfileImg = styled.img`
    width:100%;
    height:100%;
    
`