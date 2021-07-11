import { Navbar } from 'react-bootstrap';
import { NavbarStyle } from 'styles/NavbarStyle'
import { NavbarBrandStyle } from 'styles/NavbarBrandStyle'

export const Footer = () => {
    return (
    <Navbar expand="lg" style={NavbarStyle}>
        <Navbar.Brand style={NavbarBrandStyle}>&copy; 2021　清水建材</Navbar.Brand>
    </Navbar>
    );
}
