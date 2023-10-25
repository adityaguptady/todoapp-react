import React, { useState } from 'react';

const App = () =>
{ 
  const [todo, setTodo] = useState([]);
  const [todoEditing, setTodoEditing] = useState(-1)

  function addTodo(event)
  {
    event.preventDefault()
    console.log("---------------addTodo---------------")
    let newTodo = document.getElementById('todoInput').value
    console.log("Reded the new todo: "+newTodo)
    console.log(todo)
    addTodoData(todo.length, newTodo)
  }

  function addMockData()
  {
    addTodoData(todo.length, "Need to complete assignement")
    addTodoData(todo.length, "Todo 2")
    addTodoData(todo.length, "Todo 3")
    addTodoData(todo.length, "Todo 4")
    addTodoData(todo.length, "Todo 5")
    addTodoData(todo.length, "Todo 6")
  }

  function addTodoData(id, text)
  {
    let tempTodo = {
      id: id,
      text: text,
    }
    todo.push(tempTodo)
    console.log(todo)
    setTodo([...todo])
    document.getElementById('todoInput').value = ""
  }

  function deleteTodo(id)
  {
    console.log("---------------Delete---------------")
    console.log("id: "+id)
    let updateTodo = todo.filter(element=>
      {
        return element.id != id
      })
    setTodo([...updateTodo])
  }

  return <div>
          <h1>To-do List</h1>
          <button onClick={()=>addMockData()}>Mock Data</button>
          <form onSubmit={addTodo}>
            <input type='text' id='todoInput'/>
            <button type='submit'>Add Todo</button>
          </form>
          {todo.map((tempTodo)=>
          {
            return <div>
                <div>
                  {
                    todoEditing == 0 ? 
                    tempTodo.text : 
                    ( todoEditing == tempTodo.id ? 
                      <input type='text' id='todoEditingInput' value={tempTodo.text}/> :
                      tempTodo.text
                    )
                  }          
                </div>
                <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
                { 
                  todoEditing == 0 ? 
                  <button onClick={()=>setTodoEditing(tempTodo.id)}>Edit</button> : 
                  ( 
                    todoEditing == tempTodo.id ?
                    <button >Save to-do</button> :
                    <button onClick={()=>setTodoEditing(tempTodo.id)}>Edit</button>
                  )
                }
                
                
              </div>
          })}
         </div>
}

/* Class implementation of React component and To-do app using states */

// class App extends React.Component
// {
//   state = {todo: []}

//   constructor(props)
//   {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//   }
  
//   handleClick(event)
//   {
//     event.preventDefault()
//     //console.log("handleClick is clicked")
//     let newTodo = document.getElementById("addTodo").value
//     let newTodoObject = {
//       id: new Date().getTime(),
//       text: newTodo,
//     }
//     //console.log("Text readed: "+newTodo)
//     // console.log(newTodoObject)
//     // //console.log(this.state)
//     //this.setState({counter:this.state.counter+1})
//     this.state.todo.push(newTodoObject)
//     this.setState({todo:this.state.todo})
//     console.log(this.state)
//     document.getElementById("addTodo").value = ""
//   }

  
//   render()
//   {
//     return <div>
//       <h1>ToDo list</h1>
//       <form onSubmit={this.handleClick}>
//         <input type="text" id='addTodo'/>
//         <button type='submit'>Add To-do</button>
//       </form>
//       <div>
//         {this.state.todo.map((tempTodo) =>
//           {
//             return <div>{tempTodo.text}</div>
//           })
//         }
//       </div>
//     </div>
//   }
// }

export default App;