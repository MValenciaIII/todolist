import TodoItem from './TodoItem'
import itemsTodo from '../toDoListData'

function TodoListpage() {
    const itemList = itemsTodo.map(item => {
        return <TodoItem name={item.name} description={item.description} />
    })

    return(
        
        <div className="row justify-content-center">
            <div className="col-sm-3">
                {itemList}
            </div>

        </div>
    )
}


export default TodoListpage;