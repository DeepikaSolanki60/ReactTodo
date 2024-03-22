    import {useState} from 'react'; 
    import React from 'react';
    var count = 1
    function App() 
    {
      var [todo, setTodo] = useState([])
      const addToDo = () =>
      {
        console.log("Add todo");
        const todoText=document.getElementById("todoInput").value
        let todoObject = {
          id: count++,
          title: todoText
        }
        console.log("todotext"+todoText);
        todo.push(todoObject)
        setTodo([...todo])
      }
        const  deleteToDo = (id)  =>
        {
          console.log("Delete todo id :",id);
          todo = todo.filter(todoTemp =>
            {
              if(id === todoTemp.id)
              {
                return false
              }
              else
              {
                return true
              }
            })
            setTodo([...todo])
        }
      
      
      return (
        <div>
          <h1>To-Do App</h1>
          <input type='text'id='todoInput' placeholder="Add a new to-do"/>
          <button onClick={addToDo}>Add</button><br/>
          {todo.map(toDoTemp =>
            {
              return <div>
                {toDoTemp.id}
                <button onClick={() =>deleteToDo(toDoTemp.id)}>Delete</button>
              </div>
            })}
            {/* {getDynamicList} */}
        </div>
      )
    }

    export default App;
