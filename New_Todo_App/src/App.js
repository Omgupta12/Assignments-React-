import './App.css';
import Todo from './components/Todo';
import Todos from './components/TodoApp/Todos';

function App() {
   return (
      <div className="App">
         <h1>TODO</h1>
         <Todo />
         <br />
         <Todos/>
      </div>
   );
}

export default App;
