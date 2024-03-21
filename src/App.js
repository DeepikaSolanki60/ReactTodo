import {useState} from 'react'; 

function App() 
{

  const [todo, setTodo]=useState([])
  const addToDo=() =>
  {
    let toDoText=document.getElementById("toDoInput").value
    console.log(toDoText);
    todo.push(toDoText)
    setTodo([...todo])
    console.log("todolenght",todo.length);
  }
  
  return (
    <div>

      <h1>To-Do App</h1>
      <input type='text'id='toDoInput' placeholder="Add a new to-do"/>
      <button onClick={addToDo}>Add</button><br/>
      {todo.map(tempTodo =>
        {
          return <div>{tempTodo}</div>
        })}
    </div>
  )
}

export default App;
