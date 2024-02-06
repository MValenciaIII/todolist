import TodoList from './components/Todolist'
import './style.css'
import Header from './components/Header'
//TODO LIST


function App() {

    return(
        <div className="container toDoListContainer">
            <Header />
            <TodoList />
        </div>
    )
}

export default App