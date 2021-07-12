import { Typography,Chip } from '@material-ui/core';

export const CompanyTitle = ({body}:{body:string}) => {
    return (
        <Typography variant="h4" align="center">
            <Chip label={body} disabled color="primary"/>
        </Typography>
    );
}
