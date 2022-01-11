import styled from 'styled-components';

export const ProductPageContainer = styled.main`
    width:100%;
    max-width:114.8rem;
    margin:0 auto;
    @media (min-width:768px){
        display:grid;
        grid-template-columns:repeat(2,1fr);
        margin-top:9rem;
        padding:0 2.4rem;
        gap:2.4rem;
    }
`