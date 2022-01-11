import React from 'react';
import {NavbarContainer, NavbarNav, NavItem, NavLink, NavbarCloseButton} from './style';

const Navbar = ({isActive=false, isActiveHandler}) => {
    return (
        <NavbarContainer className={isActive?'active':''}>
                <NavbarCloseButton aria-label="Close Navbar" onClick={isActiveHandler}/>
                <NavbarNav>
                    <NavItem>
                        <NavLink href="#">Collections</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Men</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Women</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Contact</NavLink>
                    </NavItem>
                </NavbarNav>
        </NavbarContainer>
    )
}

export default Navbar
