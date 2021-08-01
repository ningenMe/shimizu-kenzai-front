import {PageTitleBody,PageTitleBar} from 'atoms/PageTitle'

export const PageTitle = ({body}:{body:string}) => {
  return (
        <>
            <PageTitleBody body={body}/> 
            <PageTitleBar />
        </>
    );
}
