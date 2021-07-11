import {Header} from 'organisms/Header'
import {PathRouter} from 'organisms/Router'
import {Footer} from 'organisms/Footer'

export const App = () => {
    return (
      <>
        <Header />
        <PathRouter />
        <Footer />
      </>
      );
    }
export default App