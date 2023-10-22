import React, { useState } from 'react';

const App = () =>
{ 
  const [todo, setTodo] = useState([]);

  function addTodo(event)
  {
    event.preventDefault()
    console.log("---------------addTodo---------------")
    let newTodo = document.getElementById('todoInput').value
    console.log("Reded the new todo: "+newTodo)
    console.log(todo)
    todo.push(newTodo)
    console.log(todo)
    setTodo([...todo])
  }

  function deleteTodo(event)
  {
    event.preventDefault()
    console.log("---------------Delete---------------")
    
  }

  return <div>
          <h1>To-do List</h1>
          <form onSubmit={addTodo}>
            <input type='text' id='todoInput'/>
            <button type='submit'>Add Todo</button>
          </form>
          {todo.map((tempTodo)=>
          {
            return <div>
                <div>{tempTodo}</div>
                <button onClick={deleteTodo}>Delete</button>
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