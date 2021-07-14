import { Navbar,Nav } from 'react-bootstrap';
import { Typography } from '@material-ui/core'
import { NavbarStyle } from 'styles/NavbarStyle'
import { NavbarBrandStyle } from 'styles/NavbarBrandStyle'
import { Link } from 'interfaces/Link'
import { Links } from 'constants/Links'
import { NavLink } from 'atoms/NavLink'

export const Header = () => {

    const links: Link[] = [Links.HOME,Links.WORK,Links.COMPANY,Links.INQUIRY];

    return (
        <Navbar expand="lg" style={NavbarStyle}>
            <Navbar.Brand style={NavbarBrandStyle}> 
                <Typography variant="h4">清水建材株式会社</Typography>
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
        </Navbar>
    );
}
