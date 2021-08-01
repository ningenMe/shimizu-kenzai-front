import { Typography,Divider } from '@material-ui/core';
import {KosugiMaruStyle} from 'styles/FontStyle'

export const WorkTitleBody = ({body}:{body:string}) => {
    return (
        <Typography 
            variant="h6" 
            align="center" 
            style={KosugiMaruStyle}
            display="block"
        >
            {body}
        </Typography>
    );
}

export const WorkTitleBar = () => {
    return (
        <Divider 
            variant="middle"
            style={{
                background: 'black',
                color: 'white',
                height: 5,
                padding: '0 30px',
            }}
        />
    );
}
