import 'modules/bootstrap/dist/css/bootstrap.min.css' 
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css' 

import React from 'react'
import Menu from '../template/menu' 
//import Todo from '../todo/todo'
//import About from '../about/about'
import Rotes from './routes'


export default props => (
  <div className= 'container'>  
   <Menu/>
   <Rotes/>
  </div>
)
 


//<Rotes/>
//export default props => (
//  <div className= 'container'>
//    <h1>Teste</h1>
//  </div>  
//)