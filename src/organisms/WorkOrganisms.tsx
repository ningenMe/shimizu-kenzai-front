import {Grid } from '@material-ui/core';
import {WorkCard,WorkImageCard,WorkTitle} from 'molecules/WorkMolecules'
import {WorkImageContent,WorkContent} from 'interfaces/Content'
import {itemContents,makerContents,constructContents} from 'constants/WorkConstants'

export const ItemFrame = () => {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <WorkTitle body="主要取扱品目"/>
      </Grid>
      {itemContents.map((content:WorkImageContent) => {
          return (
            <Grid item xs={12} sm={6}>
              <WorkImageCard content={content}/>
            </Grid>    
          )          
        })
      }
      <Grid item xs={12}>
        <WorkTitle body="主要取扱メーカー"/>
      </Grid>
      {makerContents.map((content:WorkContent) => {
          return (
            <Grid item xs={12} sm={6}>
              <WorkCard content={content}/>
            </Grid>    
          )          
        })
      }
      <Grid item xs={12}>
        <WorkTitle body="工事部門"/>
      </Grid>
      {constructContents.map((content:WorkImageContent) => {
          return (
            <Grid item xs={12} sm={6}>
              <WorkImageCard content={content}/>
            </Grid>    
          )          
        })
      }
    </Grid>
  );

}
