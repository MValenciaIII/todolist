import React from 'react'
import ToDoListRow from './TodoListRow';

function InputBox() {
    //useState holding a List of ToDolist OBJECT Items
    //Send text Values to OBJECT. Prob a UseSTATE


    const [taskData, setTaskData] = React.useState([])
    //HOW DO I SEND DATA TO AN OBJECT?? 
    const [inputItem, setInputItem] = React.useState({
        
        inputTitle: "",
        inputTime: "",
        inputDescription: "",
        isDone: false
    })


    function handleInputValues(event) {
        //Using this to make sure onChange is running
        // console.log(event.target)
        //console.log(`I'm working!`)

        const {name, value} = event.target;
       // console.log(name)


        //I need the current data so I'll use a callback function
        setInputItem(prevInputItem => {
            return{
                ...prevInputItem,
                [name]: value

            }
        })
        
    }

    //This'll Delete my item
    const handleDeleteItem = (event, noteTitle, noteDescription ) => {
        console.log(noteTitle, noteDescription, event)
        //How can I grab current Task item ID.

        //make UNique ID's for each Task Item
        //or 
        //make a LOOP and use if else statement to check for EQUIVALENT name and value.
        //setTaskData(prevTaskData => '')

        //I need to pass all the props data thru to find which index to Delete
        //DONE

        for (let i = 0; i < taskData.length; i++) {
            const currentObject = taskData[i];
            console.log(currentObject.inputTitle)
            console.log(currentObject.inputDescription)
            //I need to compare object values to noteTitle && noteDescription
            //to see which object index needs to be gone
            if(currentObject.inputTitle === noteTitle && currentObject.inputDescription === noteDescription) {
                //Make sure all current data isn't deleted.
                //Just removed objectIndex
                setTaskData(prevTaskData => prevTaskData.filter())
            } else {
                
            }
        }

    }


    function handleSubmit(event) {
        event.preventDefault()

        setTaskData(prevTaskData => [...prevTaskData, inputItem])

        //THe WAy to clear inputBoxes
        setInputItem({
            inputTitle: "",
            inputTime: "",
            inputDescription: "",
            isDone: false
        })
    }

 
    return(
        <div className="container">
            <ToDoListRow rowData={taskData} deleteTask={handleDeleteItem} />
            <div className="row justify-content-center">
                <div className="col-sm-4 inputContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                {/* //TEXT BOXES ARE TAKING MUCH SPACE 
                                    //FIX LATER */}
                                <input className='form-control' type="text" name="inputTitle" id="" onChange={handleInputValues} value={inputItem.inputTitle}  placeholder='Title'/>
                            </div>
                            <div className="col">
                                <input className='form-control' type="text" name="inputTime" id=""  onChange={handleInputValues}  value={inputItem.inputTime}  placeholder='Time'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input className='form-control' type="text" name="inputDescription" id=""  onChange={handleInputValues}  value={inputItem.inputDescription} placeholder='Description'/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <button className='rounded '>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default InputBox