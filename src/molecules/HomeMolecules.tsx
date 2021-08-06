import {Card,CardMedia,Typography } from '@material-ui/core';
import {HomeImageContent} from 'interfaces/Content'
import {KosugiMaruStyle} from 'styles/FontStyle'

export const HomeImageCard = ({content}:{content:HomeImageContent}) => {
  
    return (
    <Card elevation={0}>
        <CardMedia
        component="img"
        title={content.title}
        alt={content.title}
        src={content.src}
        style = {{height:400, width:1200}}
        />
    </Card>
    )
}
  
export const HomeSlideTitle = () => {
  
    return (
        <Typography align="center" variant="h4" style={KosugiMaruStyle}>
            施工事例
        </Typography>
    )
}
  