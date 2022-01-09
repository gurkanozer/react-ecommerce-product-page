import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width:26rem;
    height:100vh;  
    background: ${({theme})=>theme.colors.white};
    position:fixed;
    top:0;
    left:-100%;
    z-index:40;
    transition:all 0.5s ease;
    &.active{
        left:0;
    }
    @media (min-width:768px){
                position:relative;
                background:none;
                height:auto;
                margin-left:2.4rem;
                left:0;
                z-index:0;
            }
    `
export const NavbarCloseButton = styled.button`
width:6.8rem;
height:6.8rem;
background: url(${process.env.PUBLIC_URL}/images/icon-close.svg) no-repeat center center;
background-color:${({ theme }) => theme.colors.lightGrayishBlue};
background-size:1.6rem;
@media (min-width:768px){
    display:none;
}
`
export const NavbarNav = styled.ul`
    padding:1.2rem;
    @media (min-width:768px){
        display:flex;
    }
`
export const NavItem = styled.li`
    padding:1.2rem;
    @media (min-width:768px){
        padding:0 1.2rem;
    }
`
export const NavLink = styled.a`
    color:${({theme})=> theme.colors.black};
    font-weight:700;
    font-size:1.8rem;
    @media (min-width:768px){
        font-size:1.6rem;
        font-weight:300;
        color:${({theme})=> theme.colors.darkGrayishBlue};
        padding:4.3rem 0;
        border-bottom:4px transparent;
        &:hover{
            color:${({theme})=>theme.colors.darkBlue};
            border-bottom:4px solid ${({theme})=>theme.colors.orange};
        }
    }

`