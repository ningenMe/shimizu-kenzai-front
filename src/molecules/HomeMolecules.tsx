import {Card,CardMedia,CardContent,Divider,Grid,Typography } from '@material-ui/core';
import {HomeImageContent} from 'interfaces/Content'

export const HomeImageCard = ({content}:{content:HomeImageContent}) => {
  
    return (
    <Card elevation={0}>
        <CardMedia
        component="img"
        title={content.title}
        alt={content.title}
        src={content.src}
        style = {{height:500, width:500}}
        />
    </Card>
    )
  }
  
  