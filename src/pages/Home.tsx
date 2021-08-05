import {Container,Grid} from '@material-ui/core';
import {NotificationFrame, ImageSlideFrame} from 'organisms/HomeOrganisms'

export const Home = () => {
    

  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} spacing={3}>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <NotificationFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
            <ImageSlideFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
