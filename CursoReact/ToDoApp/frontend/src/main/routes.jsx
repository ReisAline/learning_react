import React from 'react'
import { Router, Route, Redirect, hashHistory,HashRouter } from 'react-router-dom' // saporra ta quebrada nao sei como arrumar depois eu estudo sobre isto

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
 <HashRouter history={hashHistory}>  
    <Route path='/todo' component={Todo} />
    <Route path='/about' component={About} />
    <Redirect from='*' to='/todo' />
</HashRouter> 

)