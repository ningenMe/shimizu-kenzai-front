import {Paper } from '@material-ui/core';
import {CompanyTitle} from 'atoms/CompanyAtoms'
import {ContentList} from 'molecules/CompanyMolecules'
import {orverViewContents,historyContents} from 'constants/CompanyConstants'

export const Overview = () => {
  return (
        <Paper elevation={5}> 
            <CompanyTitle body="会社概要"/>
            <ContentList contents={orverViewContents}/>
        </Paper>
    );
}

export const History = () => {
    return (
          <Paper elevation={5}> 
              <CompanyTitle body="沿革"/>
              <ContentList contents={historyContents}/>
          </Paper>
      );
  }