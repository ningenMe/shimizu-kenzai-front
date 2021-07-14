import { Navbar,Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core'
import { NavbarStyle } from 'styles/NavbarStyle'
import { NavbarBrandStyle } from 'styles/NavbarBrandStyle'
import { general } from 'constants/GeneralConstants'
import {KosugiMaruStyle} from 'styles/FontStyle'

export const Footer = () => {
    return (
    <Navbar expand="lg" style={NavbarStyle}>
        <Container>
            <Navbar.Brand style={NavbarBrandStyle}>
                <Typography variant="h4" style={KosugiMaruStyle}>&copy; 2021　{general.COMPANY_NAME}</Typography>
            </Navbar.Brand>
        </Container>
    </Navbar>
    );
}
