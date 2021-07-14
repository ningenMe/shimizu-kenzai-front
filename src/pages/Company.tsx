import {Container,Grid } from '@material-ui/core';
import {PageTitle} from 'atoms/PageTitle'
import {Overview,History} from 'organisms/CompanyOrganisms'

export const Company = () => {
  return (
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} spacing={3}>
            </Grid>

            <Grid item xs={12} spacing={3}>
              <PageTitle body="企業情報"/> 
            </Grid>
            <Grid item xs={12} spacing={3}>
              <Overview />
            </Grid>
            <Grid item xs={12} spacing={3}>
              <History />
            </Grid>

            <Grid item xs={12} spacing={3}>
            </Grid>
          </Grid>
      </Container>
    );
}
