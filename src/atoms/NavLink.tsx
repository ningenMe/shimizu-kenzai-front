import { Nav } from 'react-bootstrap';
import { NavlinkStyle } from 'styles/NavlinkStyle'
import { Link } from 'interfaces/Link'

export const NavLink = ({link}:{link:Link}) => {
    return (
        <Nav.Link href={link.href} style={NavlinkStyle} >{link.name}</Nav.Link>
    );
}
