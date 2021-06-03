import React from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'

export const PathRouter: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path='/' component={Home} />
        </HashRouter>
      );
    }
export default PathRouter