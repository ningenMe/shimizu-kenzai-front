import { Navbar,Nav,Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core'
import { NavbarStyle } from 'styles/NavbarStyle'
import { NavbarBrandStyle } from 'styles/NavbarBrandStyle'
import { Link } from 'interfaces/Link'
import { Links } from 'constants/Links'
import { NavLink } from 'atoms/NavLink'
import { general } from 'constants/GeneralConstants'
import {KosugiMaruStyle} from 'styles/FontStyle'

export const Header = () => {

    const links: Link[] = [Links.HOME,Links.WORK,Links.COMPANY,Links.HISTORY,Links.INQUIRY];

    return (
        <Navbar expand="xl" style={NavbarStyle}>
            <Container>
                <Navbar.Brand style={NavbarBrandStyle}> 
                    <Typography variant="h4" style={KosugiMaruStyle}>{general.COMPANY_NAME}</Typography>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {links.map(link => {
                            return (
                                <NavLink link={link}/>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
