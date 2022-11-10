import './App.css'
import { TaskProps } from './Interfaces'

const Task = ({task, removeTask}: TaskProps) => {
  return (
    <div className='task-container'>
        <span>{task.title}</span>
        <button onClick={() => removeTask(task.title)} className='remove-btn'>remove</button>
    </div>
  )
}

export default Task