import { List,ListItem,ListItemIcon,Divider,Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox'
import {CompanyContent} from 'interfaces/CompanyInterfaces'
import {NoteSerifStyle} from 'styles/FontStyle'

export const ContentList = ({contents}:{contents:ReadonlyArray<CompanyContent>}) => {

    const innerStyle = Object.assign( {}, {paddingLeft:"5%"}, NoteSerifStyle)
    const getInnerContent = (innerContent:string) => {
        return(
            <ListItem>
                <Typography variant="body1" style={innerStyle}>{innerContent}</Typography>
            </ListItem>
        )
    }

    const getContent = (content:CompanyContent) => {
        return (<>
            <ListItem>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <Typography variant="h6" style={NoteSerifStyle}>{content.title}</Typography>
            </ListItem>
                {content.list.map((innerContent) => getInnerContent(innerContent))}
            <Divider style={{ background: 'black' }} />
        </>);
    };

    return (
        <>
            <List>
                {contents.map((content) => getContent(content))}
            </List>
        </>
    );
}