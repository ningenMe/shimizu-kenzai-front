import {Container,Grid} from '@material-ui/core';
import {GoogleMap,Address} from 'organisms/InquiryOrganisms'

export const Inquiry = () => {
  return (
      <Container>
        <Address />
        <GoogleMap/>
      </Container>
    );
}
