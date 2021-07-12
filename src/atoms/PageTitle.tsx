import { Typography } from '@material-ui/core';

export const PageTitle = ({body}:{body:string}) => {
    return (
        <Typography variant="h4">{body}</Typography>
    );
}
