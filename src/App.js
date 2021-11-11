
import './scss/main.scss';
import ActiveTodo from './components/ActiveTodo';
import CompletedTodo from './components/CompletedTodo';
import OngoingTodo from './components/OngoingTodo';
import TodoForm from './components/TodoForm';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (

    <TodoProvider>
      <TodoForm />
      <div className="main container">

        <ActiveTodo />
        <OngoingTodo />
        <CompletedTodo />

      </div>
    </TodoProvider>

  );
}

export default App;
