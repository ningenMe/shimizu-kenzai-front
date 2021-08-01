import {Grid } from '@material-ui/core';
import {WorkCard,WorkTitle} from 'molecules/WorkMolecules'
import {WorkImageContent} from 'interfaces/Content'
import {itemContents} from 'constants/WorkConstants'

export const ItemFrame = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WorkTitle body="主要取扱品目"/>
      </Grid>
      {itemContents.map((content:WorkImageContent) => {
          return (
            <Grid item xs={12} sm={6}>
              <WorkCard content={content}/>
            </Grid>    
          )          
        })
      }
    </Grid>
  );

}
