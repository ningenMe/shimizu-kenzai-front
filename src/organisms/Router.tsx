import { HashRouter, Route } from 'react-router-dom'

import {Home} from 'pages/Home'
import {Company} from 'pages/Company'
import {Inquiry} from 'pages/Inquiry'
import {Work} from 'pages/Work'
import {History} from 'pages/History'
import {Construct} from 'pages/Construct'

export const PathRouter = () => {
    return (
        <HashRouter>
            <Route exact path='/'          component={Home} />
            <Route exact path='/home'      component={Home} />
            <Route exact path='/work'      component={Work} />
            <Route exact path='/construct' component={Construct} />
            <Route exact path='/company'   component={Company} />
            <Route exact path='/history'   component={History} />
            <Route exact path='/inquiry'   component={Inquiry} />
        </HashRouter>
    );
}
