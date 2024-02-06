


function TodoItem(props) {
    

    return(
        <div className="container itemContainer">
            <div className="row">
                <div className="col-sm-6">
                    <h4>{props.name}</h4>
                </div>
                <div className="col-sm-6 squares d-flex flex-column align-items-end">
                    <input type='checkbox' value={props.done} className="mt-auto p-2" ></input>
                </div>
            </div>
            <div className="row bottomTodoItem">
                <div className="col-sm-4">
                    <p>{props.timeDue}</p>
                </div>
                <div className="col-sm-8">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

}

export default TodoItem;