import React, {useState} from 'react'

const List = () => {
  let [task, setTask] = useState("");
  let [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    setTodoList([
      ...todoList,
      {
        id : todoList.length + 1,
        task : task,
        completed : false
      }
    ]);
    setTask("");
  }
  
  
  const handleComplete = (id) => {
    setTodoList(
      todoList.map((element) => {
        if(element.id === id) {
          element.completed =  !element.completed 
        }
        return element;
      })
    )
  }
  return (
    <div>
        <input
          placeholder='Add a task'
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
        {
            todoList.map((element) => {
              return(
                  <div key={element.id}
                    style={{
                        color : element.completed ? "green" : "black",
                        textDecoration : element.completed ? "line-through" : "none",
                        cursor : "pointer"
                    }}

                    onClick={() => handleComplete(element.id)}
                  >
                    <span style={{
                        userSelect : "none",
                    }}>{element.task}</span>
                  </div>
              )
            })
        }
    </div>
  )
}

export default List;