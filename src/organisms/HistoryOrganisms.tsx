import {Paper } from '@material-ui/core';
import {CompanyTitle} from 'atoms/CompanyAtoms'
import {ContentList} from 'molecules/CompanyMolecules'
import {historyContents} from 'constants/CompanyConstants'

export const HistoryFrame = () => {
    return (
          <Paper elevation={5}> 
              <CompanyTitle body="沿革"/>
              <ContentList contents={historyContents}/>
          </Paper>
      );
  }