import {Card,CardMedia,CardContent } from '@material-ui/core';
import {WorkImageContent} from 'interfaces/Content'
import {WorkTitleBody,WorkTitleBar} from 'atoms/WorkTitle'

export const WorkTitle = ({body}:{body:string}) => {

  return (
    <>
      <WorkTitleBody body={body}/>
      <WorkTitleBar />
    </>
  )
}

export const WorkCard = ({content}:{content:WorkImageContent}) => {

  return (
    <Card 
      elevation={10}
    >
      <CardMedia
        component="img"
        title={content.imageTitle}
        alt={content.imageTitle}
        src={content.src}
        style = {{height:250, width:250}}
      />
      <CardContent>
        {content.title}
        <br/>
        {content.body}
      </CardContent>
    </Card>
  )
}
