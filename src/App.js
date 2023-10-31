import { useState } from "react"
const App = ()=>
{
  const [todo, setTodo] = useState([])
  const [editingFlag, setEditing] = useState(-1)
  
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

  function checkListener(id)
  {
    console.log("checkListener")
    console.log(todo)
    todo.map(element => 
      {
        if(element.id == id)
        {
          element.completed = !element.completed
        }
        return element
      })
    console.log(todo)
    setTodo([...todo])
  }

  function editTodo(id)
  {
    console.log("editTodo")
    setEditing(id)
  }

  function updateTodo()
  {
    console.log("updateTodo")
    console.log("editingFlag: "+editingFlag)
    let tempTodo = todo.map(element => 
      {
        if(element.id == editingFlag)
        {
          element.text = document.getElementById("editTodo").value
        }
        return element
      })
      setTodo([...tempTodo])
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
                    //completed todo
                    <div>
                      <input type="checkbox" onClick={()=>checkListener(element.id)} checked/> 
                      <s>{element.text+"   "} </s> 
                    </div> : 
                    //incomplete todo
                    ( element.id == editingFlag ? 
                      //editing frontend
                      <div>
                        <input type="checkbox" onClick={()=>checkListener(element.id)} ></input>
                        <input type="text" value={element.text} placeholder="Update Todo here" id="editTodo"/>
                        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
                        <button onClick={()=>updateTodo()}>Save Todo</button>
                      </div>  : 
                      //default frotend
                      <div>
                        <input type="checkbox" onClick={()=>checkListener(element.id)} ></input>
                        {element.text+"   "}
                        <button onClick={()=>deleteTodo(element.id)}>Delete</button>
                        <button onClick={()=>editTodo(element.id)}>Edit</button>
                      </div>  
                    )
                    
                  }
                </div>
      })
    }
  </div>
}

export default App;