import styled from "styled-components";

export const OverlayContainer = styled.div`
    width:100%;
    height:100vh;
    background:rgba(0,0,0,0.75);
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    display:none;
    &.active{
        display:block;
    }
`