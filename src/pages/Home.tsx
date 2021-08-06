import {Container,Grid} from '@material-ui/core';
import {NotificationFrame, ImageSlideFrame, TopCardFrame, PresidentFrame} from 'organisms/HomeOrganisms'
import {PageTitleBar} from 'atoms/PageTitle'

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
            <TopCardFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
            <PageTitleBar />
          </Grid>
          <Grid item xs={12} spacing={3}>
            <PresidentFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
              <PageTitleBar />
          </Grid>
          <Grid item xs={12} spacing={3}>
          </Grid>
          <Grid item xs={12} spacing={3}>
            <ImageSlideFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
              <PageTitleBar />
          </Grid>
          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
