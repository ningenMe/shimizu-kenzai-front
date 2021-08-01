import {Container,Grid} from '@material-ui/core';
import {GoogleMapFrame,AddressFrame} from 'organisms/InquiryOrganisms'
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
            <AddressFrame />
          </Grid>

          <Grid item xs={12} spacing={3}>
            <GoogleMapFrame/>
          </Grid>

          <Grid item xs={12} spacing={3}>
          </Grid>
        </Grid>
      </Container>
    );
}
