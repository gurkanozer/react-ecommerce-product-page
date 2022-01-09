import styled from 'styled-components';

export const SliderContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:${({theme})=>theme.colors.lightGrayishBlue};
    @media (min-width:768px){
        background:none;
        flex-direction:column;
    }
`

export const ActiveImgContainer = styled.div`
    width:100%;
    position:relative;
    max-width:44.4rem;
    max-height:30rem;
    @media (min-width:768px){
        max-height:44.6rem;
    } 
    `

export const ActiveImg = styled.img`
    width:100%;
    object-fit:cover;
    max-height:30rem;
    @media (min-width:768px){
        max-height:44.6rem;
        border-radius:1.6rem;
        cursor:pointer;
    }     
`

export const SliderNav = styled.ul`
    display:none;
    padding:3rem 0;
    @media (min-width:768px){
        display:flex;
        width:100%;
        max-width:44.4rem;
        align-items:center;
        justify-content:space-between;
    }
`
export const SliderNavItem = styled.li`
    width:8.8rem;    
    height:8.8rem;
    overflow:hidden;
    border-radius:1rem;
    cursor:pointer;
    &.active{
            border:2px solid ${({theme})=> theme.colors.orange};
            img{
                opacity:0.3;
        }
    }
    &:hover{
        img{
            opacity:0.7;
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
    @media (min-width:768px){
        display:none;
    }
`
export const ArrowRight = styled(Arrow)`
    right:1.6rem;
    background: url(${process.env.PUBLIC_URL}/images/icon-next.svg) no-repeat center center;
    background-color:${({ theme }) => theme.colors.white};
    background-size:1rem;

`
export const ArrowLeft = styled(Arrow)`
    left:1.6rem;
    background: url(${process.env.PUBLIC_URL}/images/icon-previous.svg) no-repeat center center;
    background-color:${({ theme }) => theme.colors.white};
    background-size:1rem;
`