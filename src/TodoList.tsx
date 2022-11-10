import { useState, useEffect } from 'react'
import "./App.css"
import Task from './Task'
import { TaskType } from './Interfaces'

const TodoList = () => {

  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const savedTasks = localStorage.getItem("TASKS");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }else {
      return [];
    }
  });
  const [newTodo, setNewTodo] = useState('');

  // saving tasks to localStorage
  useEffect(() => {
    
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks])

  // handling form and adding task
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (newTodo.trim()) {

    const newTask: TaskType = {
      title: newTodo.trim(),
      createdAt: new Date()
    };
    setTasks(currentTasks => [...currentTasks, newTask]);
    setNewTodo('');
  }}

  // removing task
  const removeTask = (taskName: string) => {
    const updatedTasks = tasks.filter((task) => {
      return task.title !== taskName;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className='todo-list-container'>
        <form onSubmit={handleSubmit}>
            <input value={newTodo} type='text' placeholder='Enter New Task' onChange={(e) => setNewTodo(e.target.value)}/>
            <button type='submit' className='add-btn'>Add Task</button>
        </form>
        {tasks.map((item, index) => (
          <Task task={item} key={index} removeTask={removeTask}/>
        ))}
    </div>
  )
}

export default TodoList