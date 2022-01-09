import React from 'react';

import {OverlayContainer} from './style';

const Overlay = ({isActive, onClick}) => {
    return (
        <OverlayContainer className={isActive ? 'active': ''} onClick={onClick}/>
    )
}

export default Overlay;
