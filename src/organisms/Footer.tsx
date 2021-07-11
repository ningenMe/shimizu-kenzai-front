import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';

export const Footer: React.FC = () => {
    return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand>&copy; 2021　清水建材</NavbarBrand>
    </Navbar>
    );
}
export default Footer