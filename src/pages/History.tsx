import {Container,Grid } from '@material-ui/core';
import {PageTitle} from 'molecules/PageMolecules'
import {HistoryFrame} from 'organisms/HistoryOrganisms'

export const History = () => {
  return (
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} spacing={3}>
            </Grid>

            <Grid item xs={12} spacing={3}>
              <PageTitle body="沿革"/> 
            </Grid>
            <Grid item xs={12} spacing={3}>
              <HistoryFrame />
            </Grid>

            <Grid item xs={12} spacing={3}>
            </Grid>
          </Grid>
      </Container>
    );
}
