import { Nav,Button } from 'react-bootstrap';
import { NavlinkStyle } from 'styles/NavlinkStyle'
import { Link } from 'interfaces/Link'
import {KosugiMaruStyle} from 'styles/FontStyle'

export const NavLink = ({link}:{link:Link}) => {
    const style = Object.assign( {}, NavlinkStyle, KosugiMaruStyle)
    return (
        <Button variant="outline-info">
            <Nav.Link href={link.href} style={style} >{link.name}</Nav.Link>
        </Button>
    );
}
