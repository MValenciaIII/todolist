//IMPORTING DATA FROM js file
import toDoListData from "../toDoListData"
import React from 'react'



//TEMPLATE for Item Data
function ToDoItem({noteTitle, noteTime, noteDescription, noteBoolean, noteDelete}) {
    console.log(noteDelete)
    //IF checkbox is TRUE strikethough text
    //NEEDS CONDITIONAL RENDERING
    //Do I want to add a Classname/Element tag
    //Also do I let "InputBox.js" handle the onClick?
    //Or do I make a useState in here. 

    const [checkBoxBoolean, setCheckBoxBoolean] = React.useState(false)

    //props.noteBooleans need to change when Clicked
    function setBoolean() {
        setCheckBoxBoolean(prevCheckBoxBoolean => !prevCheckBoxBoolean)

    }

    //How to DElete Task item
    //First, Add a className='HIDE ELEMENT'
    //second, REmove and set new value to State="".

    //First option just make a ternary inside the className
    //On This component

    //Second option requires us to Find the current INDEX.
    //BUT For organization sake We make the function in "InputBox.js"

    return(

        <div className="row itemContainer" >
            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-6 todoTitle">
                        {checkBoxBoolean ? <s><h3>{noteTitle}</h3></s> : <h3>{noteTitle}</h3>}
                    </div>
                    <div className="col-sm-6 todoDone">
                        <input type="checkbox" name="done" id="" onClick={setBoolean} checked={checkBoxBoolean}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 todoTime">
                        {checkBoxBoolean ? <s><p>{noteTime}</p></s> : <p>{noteTime}</p>}
                    </div>
                    <div className="col-sm-6 todoDescription">
                        {checkBoxBoolean ? <s><p>{noteDescription}</p></s> : <p>{noteDescription}</p>}
                    </div>
                </div>
            </div>
        </div>

    )
}

function ToDoListRow(props) {
    console.log(props)
    // .MAP method variable
    //toDoListData = array of object data
    //currentToDoItem = INDEX PARAMETER for CALLBACK FUNCITON

    const deleteFunction = props.deleteTask;

    let toDoDataMapped = props.rowData.map(
        (currentToDoItem) => {
            return <ToDoItem 
            noteTitle={currentToDoItem.inputTitle} 
            noteTime={currentToDoItem.inputTime} 
            noteDescription={currentToDoItem.inputDescription}
            noteBoolean={currentToDoItem.isDone}
            noteDelete={deleteFunction}
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