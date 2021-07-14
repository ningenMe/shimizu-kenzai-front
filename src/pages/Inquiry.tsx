import {Container,Grid} from '@material-ui/core';
import {GoogleMap,Address} from 'organisms/InquiryOrganisms'
import {PageTitle} from 'atoms/PageTitle'

export const Inquiry = () => {
  return (
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} spacing={3}>
          </Grid>

          <Grid item xs={12} spacing={3}>
            <PageTitle body="お問い合わせ"/> 
          </Grid>
          <Grid item xs={12} spacing={3}>
            <Address />
          </Grid>

          <Grid item xs={12} spacing={3}>
            <GoogleMap/>
          </Grid>

          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
