import { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([{
    id: 1,
    task: "Buy catnip",
    complete: false,
  }]);

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) item.complete = !item.complete;
        return item;
      })
    );
  }
  return (
    <div>
      <center>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          spellCheck="false"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={() => {
            task &&
              setTodoList([
                ...todoList,
                {
                  id: todoList.length + 1,
                  task: task,
                  complete: false,
                }
                ]);
            setTask("");
          }}
        >
          Add
        </button>
        {todoList.map((member) => {
          return (
            <div
              key={member.id}
              style={{
                userSelect: "none",
                margin: "20px",
                fontFamily: "Didact Gothic",
                textDecoration: member.complete ? "line-through" : "none",
                color: member.complete ? "#1D6f44" : "black",
                cursor: "pointer",
              }}
              onClick={() => {
                handleComplete(member.id);
              }}
            >
              <span>{member.task}</span>
            </div>
          );
        })}
      </center>
    </div>
  );
};

export default ToDo;