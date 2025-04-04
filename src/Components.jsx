import { useState } from "react";

function ToDoList(){
    const [tasks,setTasks]=useState(['Eat Breakfast','Study React','Leetcode']);
    const [newTask, setNewTask]=useState("");

    function inputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
        
    }
    function deleteTask(index){
        const updatedTasks=tasks.filter((_,i)=>i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="toDoList">
            <h1>To-Do List</h1>
            <div className="inputContainer">
                <input  type="text"
                        placeholder="Enter the task..."
                        value={newTask}
                        id="input" 
                        onChange={inputChange}
                        onKeyDown={(event) => event.key === "Enter" && addTask()}/>
                <button onClick={addTask} className="addTask">Add Task</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="task">{task}</span>
                        <button onClick={()=>deleteTask(index)} className="delete">Delete</button>
                        <button onClick={()=>moveTaskUp(index)} className="move">👆</button>
                        <button onClick={()=>moveTaskDown(index)} className="move">👇</button>
                    </li>)}
            </ol>
        </div>
    )
}
export default ToDoList;