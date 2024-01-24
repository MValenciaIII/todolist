


function TodoItem(props) {


    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <p>{props.name}</p>
                </div>
                <div className="col-sm-6">
                    <p>{props.description}t</p>
                </div>
            </div>
        </div>
    )

}

export default TodoItem;