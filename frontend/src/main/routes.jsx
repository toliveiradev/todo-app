import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todo' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todo' />
    </Router>
)