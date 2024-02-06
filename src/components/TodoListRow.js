//IMPORTING DATA FROM js file
import toDoListData from "../toDoListData"




//TEMPLATE for Item Data
function ToDoItem(props) {
    console.log(props)
    return(

        <div className="row itemContainer" >
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-6 todoTitle">
                        <h3>{props.noteTitle}</h3>
                    </div>
                    <div className="col-sm-6 todoDone">
                        <input type="checkbox" name="done" id="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 todoTime">
                        <p>{props.noteTime}</p>
                    </div>
                    <div className="col-sm-6 todoDescription">
                        <p>{props.noteDescription}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

function ToDoListRow() {

    // .MAP method variable
    //toDoListData = array of object data
    //currentToDoItem = INDEX PARAMETER for CALLBACK FUNCITON

    let toDoDataMapped = toDoListData.map(
        (currentToDoItem) => {
            return <ToDoItem 
            noteTitle={currentToDoItem.name} 
            noteTime={currentToDoItem.timeDue} 
            noteDescription={currentToDoItem.description}
             />
        }
    )


    return (
        <div className="row justify-content-center">
            <div className="col-sm-4 noteList">
                
                {toDoDataMapped}

            </div>
        </div>
    )
}

export default ToDoListRow