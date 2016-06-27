import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './modules/routes/App';
import Inbox from './modules/routes/Inbox';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
), document.getElementById('app'))