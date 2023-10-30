import { useState } from "react"
const App = ()=>
{
  const [todo, setTodo] = useState([])
  

  function addTodo()
  {
    console.log("------------addTodo------------")
    let tempTodo = document.getElementById("todoInput").value
    console.log("tempTodo: "+tempTodo)
    
    if(todo.length>0)
      addToArray(todo[todo.length-1].id+1,tempTodo, false)
    else
      addToArray(0,tempTodo, false)
    document.getElementById("todoInput").value = ""
  }

  function addToArray(id, text, completed)
  {
    let tempTodoObject = {
      id: id,
      text: text,
      completed: completed
    }
    todo.push(tempTodoObject)
    console.log(todo)
    setTodo([...todo])
  }

  function deleteTodo(id)
  {
    console.log("----------------deleteTodo----------------")
    console.log("id: "+id)
    console.log(todo)
    let tempTodo = todo.filter(element =>
      {
        return element.id != id
      })
    console.log(tempTodo)
    setTodo([...tempTodo])
  }

  function mock()
  {
    if(todo.length >0)
    {
      addToArray(todo[todo.length-1].id+1,"Todo 1", true)
      addToArray(todo[todo.length-1].id+1,"Todo 2", false)
      addToArray(todo[todo.length-1].id+1,"Todo 3", false)
      addToArray(todo[todo.length-1].id+1,"Todo 4", false)
    }
    else
    {
      addToArray(0, "Todo 1", true)
      addToArray(todo[todo.length-1].id+1,"Todo 2", false)
      addToArray(todo[todo.length-1].id+1,"Todo 3", false)
      addToArray(todo[todo.length-1].id+1,"Todo 4", false)
    }
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
                  { 
                    element.completed ? 
                    <div>
                      <input type="checkbox" checked/> 
                      <s>{element.text+"   "} </s> 
                    </div> : 
                    <div>
                      <input type="checkbox"></input>
                      {element.text+"   "}
                      <button onClick={()=>deleteTodo(element.id)}>Delete</button>
                    </div>
                  }
                </div>
      })
    }
  </div>
}

export default App;