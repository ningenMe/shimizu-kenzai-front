import { HashRouter, Route } from 'react-router-dom'

import {Home} from 'pages/Home'
import {Company} from 'pages/Company'
import {Inquiry} from 'pages/Inquiry'

export const PathRouter = () => {
    return (
        <HashRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/company' component={Company} />
            <Route exact path='/inquiry' component={Inquiry} />
        </HashRouter>
    );
}
