import React, { useState } from 'react';
import { Collapse,
         Navbar,
         NavbarToggler,
        } from 'reactstrap';

export const Header: React.FC = () => {
    const [navbarToggleOpen, setNavbarToggleOpen] = useState(false);
    const toggleNavbar = () => setNavbarToggleOpen(!navbarToggleOpen);

    return (
    <Navbar color="dark" dark expand="lg">
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={navbarToggleOpen} navbar>
        </Collapse>
    </Navbar>
    );
}
export default Header