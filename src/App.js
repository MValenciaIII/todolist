import Header from './components/Header'
import ToDoListRow from './components/TodoListRow'
import Inputbox from './components/Inputbox'
import './style.css'

function App() {

    return(
        <div className="container toDoListContainer">
            <Header />

            <Inputbox />
        </div>
    )
}

export default App