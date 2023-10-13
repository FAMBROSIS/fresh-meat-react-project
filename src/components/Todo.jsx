import React, { useState } from "react";

const Todo = () => {
  //anytime you update the first value use the second to update it
  const [task, setTask] = useState(""); //used the store the name of the task
  const [editValue, setEditValue] = useState(""); //holds the input value when the user updates an item
  const [updateItem, setUpdateItem] = useState(null); //used to keep track of which item is currently being edited
  const [value, setValue] = useState(""); //holds the input value of a todo item in the list
  const [todo, setTodo] = useState([]); //React
  // let todoList = [] //Vanilla JavaScript

  //ADDS A NEW TASK
  //when the user adds a new task with an empty array of todo items
  //if task input is not equal to an empty string then update to todo state(using a spread operator so the original array is not affected) the task will be added to the list of task stored in the todo state.
  const handleAddTask = () => {
    if (task !== "") {
      setTodo([...todo, { name: task, items: [] }]); //whatever task is added will be an object with the name and task that needs to be completed as keys
      setTask(""); //used to clear the task variable so the input field whick resets the input field so another task can be added
    }
  };

  //ADDS A NEW TODO ITEM TO A TASK
  //if the todo input value is not empty then whatever taskIndex i am at, then add a new todo item(value) to the itms array of the specified task.
  const handleAddTodo = (taskIndex) => {
    if (value !== "") {
      const newTask = [...todo];
      newTask[taskIndex].items.push(value);
      setTodo(newTask); //updates the todo state with the  new task
      setValue(""); //clears the input for the next item
    }
  };

  //REMOVE FUNCTION
  const handleClickRm = (taskIndex, todoIndex) => {
    const rmTodo = [...todo]; //creates a copy of the todo list and spreads out the content inside so an individual element can be grabbed(array)
    rmTodo[taskIndex].items.splice(todoIndex, 1); //removes the selected index of the array
    setTodo(rmTodo); //updating the state of the todo list(array) with the rmTodo value which is our new array so now the setTodo is equal to the value of rmTodo//?im a little confused how this is updating the list?
  };

  //THIS FUNCTION TARGETS THE INDEX OF THE SELECTED ITEM AND UPDATES THE INDEX OF THE TODO
  const handleSelect = (taskIndex, todoIndex) => {
    //takes the state of the current array and makes it changeable
    //this is our way to target the index
    setUpdateItem({ taskIndex, todoIndex }); //giving access to the index we are currently at
    setEditValue(todo[taskIndex].items[todoIndex]); //updating the value of the todo index
  };

  //UPDATES THE INPUT OF A SELECTED TODO ITEM
  const handleUpdate = () => {
    if (editValue !== "") {
      const updateValue = [...todo];
      updateValue[updateItem.taskIndex].items[updateItem.todoIndex] = editValue; //updates the input value of the selected todo item and uses the updateItem object to access a specific todo item
      setTodo(updateValue); //updates the todo state with the new updatedValue
      setUpdateItem(null); //after updating the item the updatedItem state is set back to null so that it knows no values are being updated currently
      setEditValue(""); //clears for the next input
    }
  };
  //REMOVES A TASK
  const rmTask = (taskIndex) => {
    const deleteTask = [...todo];
    deleteTask.splice(taskIndex, 1); //removes the task at the specified index.
    setTodo(deleteTask); //updates the state for the todo with the new array without the deleted value
  };

  return (
    <div>
      {/* the value={task} sets the value of input field for a task so that when the value changes the input will update the field with the most recent change */}
      <input
        id="input"
        placeholder="Task Name"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {/* using .map to iterate through the todo array and targets the specified task name and item and the index of the current task in the todo array */}
        {todo.map((task, taskIndex) => (
          // for each task im creating a new div with the key attribute is set to taskIndex, for updating the todo list
          <div key={taskIndex}>
            {/* inside each div the current task name will displayed */}
            <h3>{task.name}</h3>
            <button
              id="rmTaskButton"
              onClick={() => {
                rmTask(taskIndex);
              }}
            >
              Clear
            </button>
            <input
              id="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => handleAddTodo(taskIndex)}>
              Add To List
            </button>
            <ul>
              {/* maps over the task.items array(todo items index) */}
              {task.items.map((todoItems, todoIndex) => (
                // a list item is rendered and the key attribute is targeting the todoIndex
                <li key={todoIndex}>
                  {/* this checks if the updatedItem state is not null and if both updatedItem.taskIndex and updateItem.todoIndex are equel to the current taskIndex and todoIndex. if the condition is true then the code runs */}
                  {updateItem &&
                  updateItem.taskIndex === taskIndex &&
                  updateItem.todoIndex === todoIndex ? (
                    <div>
                      {/* this div represents the editing view of the todo item */}
                      <input
                        id="editInput"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                      <button onClick={handleUpdate}>Update</button>
                    </div>
                  ) : (
                    <div>
                      {todoItems}
                      <button
                        onClick={() => handleSelect(taskIndex, todoIndex)}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleClickRm(taskIndex, todoIndex)}
                      >
                        X
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
