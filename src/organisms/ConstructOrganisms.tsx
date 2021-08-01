import {Paper } from '@material-ui/core';
import {CompanyTitle} from 'atoms/CompanyAtoms'
import {ContentList} from 'molecules/ConstructMolecules'

export const ConstructFrame = () => {
  return (
        <Paper elevation={5}> 
            <CompanyTitle body="主な工事経歴書"/>
            <ContentList />
        </Paper>
    );
}
