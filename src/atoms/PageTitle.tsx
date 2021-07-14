import { Typography } from '@material-ui/core';
import {KosugiMaruStyle} from 'styles/FontStyle'

export const PageTitle = ({body}:{body:string}) => {
    return (
        <Typography variant="h4" style={KosugiMaruStyle}>{body}</Typography>
    );
}
