import {Paper } from '@material-ui/core';
import {CompanyTitle} from 'atoms/CompanyAtoms'
import {ContentList} from 'molecules/CompanyMolecules'
import {orverViewContents} from 'constants/CompanyConstants'

export const OverviewFrame = () => {
  return (
        <Paper elevation={5}> 
            <CompanyTitle body="会社概要"/>
            <ContentList contents={orverViewContents}/>
        </Paper>
    );
}
