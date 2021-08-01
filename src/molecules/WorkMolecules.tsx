import {Card,CardMedia,CardContent,Divider,Grid,Typography } from '@material-ui/core';
import {WorkImageContent,WorkContent} from 'interfaces/Content'
import {WorkTitleBody,WorkTitleBar} from 'atoms/WorkTitle'

export const WorkTitle = ({body}:{body:string}) => {

  return (
    <>
      <WorkTitleBody body={body}/>
      <WorkTitleBar />
    </>
  )
}


export const WorkCard = ({content}:{content:WorkContent}) => {
  
  return (
    <Card 
      elevation={10}
    >
      <CardContent>
        <Typography variant="h4">
          {content.title}
        </Typography>
        <Divider
          style = {{
            height:5
          }}
        />
        <Typography variant="body1">
          {content.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export const WorkImageCard = ({content}:{content:WorkImageContent}) => {
  
  return (
    <Card 
      elevation={10}
    >
      <Grid container>
        <Grid xs={12} sm={4} item>
          <CardMedia
            component="img"
            title={content.imageTitle}
            alt={content.imageTitle}
            src={content.src}
            style = {{height:200, width:200}}
          />
        </Grid>
        <Grid xs={12} sm={8} item>
          <Divider
            style = {{
              height:5
            }}
          />
          <CardContent>
            <Typography variant="h4">
              {content.title}
            </Typography>
            <Divider
              style = {{
                height:5
              }}
            />
            <Typography variant="body1">
              {content.body}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

