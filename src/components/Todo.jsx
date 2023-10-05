import React, {useState} from 'react'

const Todo = () => {
    //anytime you update the first value use the second to update it
    const [editValue,setEditValue]=useState("")
    const [updateItem, setUpdateItem]=useState(null)
    const [value, setValue]=useState('') 
    const [todo, setTodo]=useState([]) //React
    // let todoList = [] //Vanilla JavaScript
    //adding an item to a list
    const handleClick=()=>{
        setTodo([...todo, value]) //React
        // todoList.push(value) //Vanilla JavaScript
    }
    //REMOVE FUNCTION
    const handleClickRm = (index) => {
        const rmTodo=[...todo] //creates a copy of the todo list and spreads out the content inside so an individual element can be grabbed(array)
        rmTodo.splice(index, 1) //removes the selected index of the array
        setTodo(rmTodo) //updating the state of the todo list(array) with the rmTodo value which is our new array so now the setTodo is equal to the value of rmTodo//?im a little confused how this is updating the list?

    }

    //THIS FUNCTION TARGETS THE INDEX OF THE SELECTED ITEM AND UPDATES THE INDEX OF THE TODO
    const handleSelect=(index)=>{
        //takes the state of the current array and makes it changeable
        //this is our way to target the index
        setUpdateItem(index) //giving access to the index we are currently at
        setEditValue(todo[index]) //updating the value of the todo index
    }

    const handleUpdate=()=>{
        if(editValue !== ''){
            const updateValue=[...todo]
            updateValue[updateItem] = editValue
            setTodo(updateValue)
            setUpdateItem(null)
            setEditValue("")
        }
    }


    return (
        <div>
          <input id='input' value={value} onChange={(e)=> setValue(e.target.value)} />
          <button onClick={handleClick}>Add To List</button>
          {/* <button onClick={handleClickRm}>Remove First Todo Item</button> */}
          {/* <button id='editButton' onClick={yourEditFunction}>Edit List</button> */}
          <div>
            <ol id='todoList'>
              {todo.map((todoItems, index) => (
                //  the key is a property that we can use to target for a variety of array functions and methods
                <li key={index}>
                  {updateItem === index ? (
                    <div>
                      <input id='editInput' value={editValue} onChange={(e)=> setEditValue(e.target.value)} />
                      <button onClick={handleUpdate}>Update</button>
                    </div>
                  ) : (
                    <div>
                      {todoItems}
                      <button onClick={()=>handleSelect(index)}>Edit</button> 
                      <button onClick={()=> handleClickRm(index)}>X</button>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      );
};

export default Todo