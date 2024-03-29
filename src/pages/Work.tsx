import {Container,Grid} from '@material-ui/core';
import {PageTitle} from 'molecules/PageMolecules'
import {ItemFrame} from 'organisms/WorkOrganisms'

export const Work = () => {
  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} spacing={3}>
          </Grid>

          <Grid item xs={12} spacing={3}>
            <PageTitle body="事業内容"/> 
          </Grid>
          <Grid item xs={12} spacing={3}>
            <ItemFrame />
          </Grid>
          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
