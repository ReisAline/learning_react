import React from 'react'
import IconButon from '../template/iconButton'

export default props =>{
  const renderRows=()=>{
    const list= props.list||[]
    return list.map(todo =>(
      <tr key={todo._id}>
        <td className ={todo.done ? 'markedAsDone' : ''}>
          {todo.description}
        </td>
        <td>
          <IconButon style = 'success' icon = 'check' hide ={todo.done}
                   onClick = {()=> props.handleMarkAsDone(todo)}/>
          <IconButon style = 'warning' icon = 'undo'hide = {!todo.done}
                   onClick = {()=> props.handleMarkAsPending(todo)}/>         
          <IconButon style = 'danger' icon= 'trash-o'
                   onClick = {()=> props.handleRemove(todo)}/>
        </td>
      </tr>
    ))
  }
  return(
    <table className= 'table'>
      <thead>
        <tr>
          <th>Descricao</th>
          <th className= 'tableActions' >Acoes</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
