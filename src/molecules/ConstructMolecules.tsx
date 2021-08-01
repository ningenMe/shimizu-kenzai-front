import { List,ListItem,ListItemIcon,Divider,Typography } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import {ConstructContent} from 'interfaces/Content'
import {constructContents} from 'constants/ConstructConstants'
import {NoteSerifStyle} from 'styles/FontStyle'

export const ContentList = () => {

    const innerStyle = Object.assign( {}, {paddingLeft:"5%",paddingRight:"5%"}, NoteSerifStyle)

    const getContent = (content:ConstructContent) => {
        return (<>
            <ListItem>
                <ListItemIcon>
                    <BuildIcon />
                </ListItemIcon>
                <Typography variant="h6" style={NoteSerifStyle}>{content.date + ": " + content.prefecture}</Typography>
            </ListItem>
            <Typography variant="h6" style={innerStyle} align="left">{content.name}</Typography>
            <Typography variant="h6" style={innerStyle} align="right">{"発注者:  " + content.order}</Typography>
            <Divider style={{ background: 'black' }} />
        </>);
    };

    return (
        <>
            <List>
                {constructContents.map((content) => getContent(content))}
            </List>
        </>
    );
}