import { Typography,Divider } from '@material-ui/core';
import {KosugiMaruStyle} from 'styles/FontStyle'

export const PageTitleBody = ({body}:{body:string}) => {
    return (
        <Typography variant="h4" style={KosugiMaruStyle}>{body}</Typography>
    );
}

export const PageTitleBar = () => {
    return (
        <Divider 
            variant="fullWidth"

            style={{
                background: '#191970',
                borderRadius: 3,
                border: 0,
                height: 10,
                padding: '2px',
            }}
        />
    );
}
