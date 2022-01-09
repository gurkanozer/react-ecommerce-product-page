import styled from "styled-components";

export const LightboxContainer = styled.div`
    width:100%;
    min-height:100%;
    position:absolute;
    top:0;
    left:0;
    display:none;
    &.active{
        display:flex;
        align-items:center;
        justify-content:center;    
    }
    `
export const LightboxInner = styled.div`
    width:55rem;
    z-index:30;
    position:relative;

    `
export const LightboxHeader = styled.div`
    display:flex;
    justify-content:right;
    padding-bottom:2rem;
`
export const LightboxCloseButton = styled.button`
    width:3rem;
    height:3rem;
    & svg{
        color:${({theme})=>theme.colors.lightGrayishBlue};
    }
    &:hover{
        svg{
            color:${({theme})=>theme.colors.orange};
        }
    }
`
export const LightboxBody = styled.div`
    width:100%;
    position:relative;
`
export const ActiveImage = styled.img`
    object-fit:content;
    border-radius:2.4rem;
`
export const LightboxFooter = styled.div`
    width:100%;
    padding:3.8rem 5rem;
`

export const LightboxNav = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const LightboxNavItem = styled.li`
    width:9.2rem;
    height:9.2rem;
    overflow:hidden;
    border-radius:1rem;
    cursor:pointer;
    &.active{
        border:2px solid ${({theme})=> theme.colors.orange};
        img{
            filter:brightness(1.2);
        }
    }
    &:hover{
        img{
            filter:brightness(1.2);

        }
    }
`
export const Img = styled.img`

`

export const Arrow = styled.button`
    width:4rem;
    height:4rem;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    border-radius:50%;
    background: ${({theme})=> theme.colors.white};
    color: ${({theme})=> theme.colors.darkGrayishBlue};
    &:hover{
        color: ${({theme})=> theme.colors.orange};
    }
`
export const ArrowRight = styled(Arrow)`
    right:-2rem;
    width:5.2rem;
    height:5.2rem;
`
export const ArrowLeft = styled(Arrow)`
    left:-2rem;
    width:5.2rem;
    height:5.2rem;
`