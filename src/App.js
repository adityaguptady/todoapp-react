import React, {useState} from 'react';

const App = () =>
{
  const [todo, setTodo] = useState([]);

  function handleClick(event)
  {
    event.preventDefault()
    console.log("-------------------handleClick is clicked-------------------")
    let newTodo = document.getElementById("addTodo").value
    let newTodoObject = {
      id: todo.length,
      text: newTodo,
      completed: false,
    }
    //console.log("Text readed: "+newTodo)
    // console.log(newTodoObject)
    //console.log(todo)
    todo.push(newTodoObject)
    //setTodo([...todo].concat(newTodoObject))
    setTodo([...todo])
    console.log(todo)
    document.getElementById("addTodo").value = ""
  }

  function deleteTodo(id)
  {
    //event.preventDefault()
    console.log("-------------------Delete button called!-------------------")
    console.log(todo)
    let udatedTodo = todo.filter((tempTodo)=>  tempTodo.id != id)
    console.log("Update Array: "+udatedTodo)
    setTodo(udatedTodo)
    console.log(todo)
  }
  
  return <div>
       <h1>ToDo list</h1>
       <form onSubmit={handleClick}>
         <input type="text" id='addTodo'/>
         <button type='submit'>Add To-do</button>
       </form>
       <div>
          {todo.map((tempTodo) =>
            {
              return <div id="todoListID">
                <div id="todoTextId">{tempTodo.text}</div>
                <button onClick={()=>deleteTodo(tempTodo.id)}>Delete</button>
                </div>
            })
          }          
      </div>
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