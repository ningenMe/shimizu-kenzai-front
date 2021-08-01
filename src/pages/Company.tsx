import {Container,Grid } from '@material-ui/core';
import {PageTitle} from 'molecules/PageMolecules'
import {OverviewFrame} from 'organisms/CompanyOrganisms'

export const Company = () => {
  return (
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} spacing={3}>
            </Grid>

            <Grid item xs={12} spacing={3}>
              <PageTitle body="会社概要"/> 
            </Grid>
            <Grid item xs={12} spacing={3}>
              <OverviewFrame />
            </Grid>

            <Grid item xs={12} spacing={3}>
            </Grid>
          </Grid>
      </Container>
    );
}
