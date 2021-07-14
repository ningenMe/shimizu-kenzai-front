import {Grid,Card,Typography} from '@material-ui/core';
import Iframe from 'react-iframe'
import {KosugiMaruStyle} from 'styles/FontStyle'
import {general} from 'constants/GeneralConstants'

export const Address = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4} >
                <Card style={{backgroundColor:"#FFFFCC"}}>
                    <Typography align="center" variant="h4" style={KosugiMaruStyle}>{general.COMPANY_NAME}</Typography>
                    <Typography align="center" variant="body1" style={KosugiMaruStyle}>{"〒" + general.POSTAL_CODE + " " + general.ADDRESS}</Typography>
                    <Typography align="center" variant="body1" style={KosugiMaruStyle}>{"TEL: " + general.PHONE_NUMBER}</Typography>
                    <Typography align="center" variant="body1" style={KosugiMaruStyle}>{"FAX: " + general.FAX_NUMBER}</Typography>
                    <Typography align="center" variant="body1" style={KosugiMaruStyle}>{"E-MAIL: " + general.EMAIL}</Typography>
                </Card>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}

export const GoogleMap = () => {
  return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={1} sm={4}>
            </Grid>
            <Grid item xs={10} sm={4}>
            <Iframe id = 'page1'
                    url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.459322350775!2d135.5169585047514!3d34.6683551681321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e74f472b1427%3A0x9167615b5973ce!2z44CSNTQyLTAwMTIg5aSn6Ziq5bqc5aSn6Ziq5biC5Lit5aSu5Yy66LC355S677yZ5LiB55uu77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1626262721128!5m2!1sja!2sjp'
                    width='350'
                    height='200'
            />
            </Grid>
            <Grid item xs={1} sm={4}>
            </Grid>
            <Grid item xs={12}>
            </Grid>
        </Grid>
    );
}