import Header from './components/Header'
import ToDoListRow from './components/TodoListRow'
import './style.css'

function App() {

    return(
        <div className="container toDoListContainer">
            <Header />
            <ToDoListRow />
        </div>
    )
}

export default App