import './App.css';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <h1>Welcome To Your To-do App!</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
