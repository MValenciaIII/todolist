import TodoList from './components/Todolist'
import './style.css'
//TODO LIST


function App() {

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-3 text-center toDoListTitle">
                    <h2>Mikel's Todo List</h2>
                </div>
            </div>
            <TodoList />
        </div>
    )
}

export default App