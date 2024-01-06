import React,{useState} from "react";



const Todo = ()=>{

    const [task, setTask] = useState([""]);

    function addTask (){
        const newTodo = {
            id: task.length,
            item:"New Todo"
        };
        setTask([...task, newTodo]);
    }

    return(
        <div>
            <h1>My todos</h1>
            <ul style={{listStyleType: 'none', padding: 0 }}>
                {task.map((currentTask) =><li>{currentTask.item}</li>)}
            </ul>
            <button onClick={addTask}>Add Todo</button>
            <hr/>
        </div>
    )
}

export default Todo;