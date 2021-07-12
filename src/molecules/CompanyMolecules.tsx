import { List,ListItem,ListItemIcon,ListItemText,Divider } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox'
import {CompanyContent} from 'interfaces/CompanyInterfaces'

export const ContentList = ({contents}:{contents:ReadonlyArray<CompanyContent>}) => {

    const getInnerContent = (innerContent:string) => {
        return(
            <ListItem>
                <ListItemText primary={innerContent} style={{paddingLeft:"5%"}} />
            </ListItem>
        )
    }

    const getContent = (content:CompanyContent) => {
        return (<>
            <ListItem>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={content.title} />
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