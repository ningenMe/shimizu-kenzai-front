import {Container,Grid } from '@material-ui/core';
import {PageTitle} from 'atoms/PageTitle'

export const Construct = () => {
  return (
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} spacing={3}>
            </Grid>

            <Grid item xs={12} spacing={3}>
              <PageTitle body="工事経歴"/> 
            </Grid>
            <Grid item xs={12} spacing={3}>
            </Grid>

            <Grid item xs={12} spacing={3}>
            </Grid>
          </Grid>
      </Container>
    );
}
