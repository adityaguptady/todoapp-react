import { useState } from "react"

const App = ()=>
{
  const [todo, setTodo] = useState([])
  const [counter, setCounter] = useState(1)

  function addTodo()
  {
    console.log("------------addTodo------------")
    let tempTodo = document.getElementById("todoInput").value
    console.log("tempTodo: "+tempTodo)

    addToArray(tempTodo, false)
    document.getElementById("todoInput").value = ""
  }

  function addToArray(text, completed)
  {
    let tempTodoObject = {
      id: counter,
      text: text,
      completed: completed
    }
    todo.push(tempTodoObject)
    console.log(todo)
    setTodo([...todo])
    setCounter(counter+1)
  }

  function deleteTodo(id)
  {
    console.log("----------------deleteTodo----------------")
    let tempTodo = todo.filter(element =>
      {
        return element.id != id
      })
    setTodo([...tempTodo])
  }

  function mock()
  {
    addToArray("Todo 1", true)
  addToArray("Todo 2", false)
  addToArray("Todo 3", false)
  addToArray("Todo 4", false)
  }

  return <div>
    <h1>To-do Application</h1>
    <button onClick={()=>mock()}>Mock</button>
    <input type="text" id="todoInput" placeholder="Enter todo here"/>
    <button onClick={()=>addTodo()}>Add To-do</button>
    {
      todo.map(element => 
      {
        return  <div>
                  { element.completed ? <input type="checkbox" checked></input> : <input type="checkbox"></input>}
                  
                  {element.text+"   "} 
                  <button onClick={()=>deleteTodo(element.id)}>Delete</button>
                </div>
      })
    }
  </div>
}

export default App;