import React, {useState} from "react";
import Button from "../Button/Button";
import HeaderDate from "../HeaderDate/HeaderDate";
import TodoDisplay from "../TodoDisplay/TodoDisplay"
import todosContainer from "../todosContainer/todosContainer"
import "./MainContainer.css" 


const MainContainer=()=>{

    
    const allTodos = todosContainer.map(
        item=>
        <TodoDisplay 
        item={item} 
        id={item.id}
        completed={item.completed}
        key={item.id}/>)
    
    const [todoDisplay, setTodoDisplay]=useState(allTodos)

    const addNewTodos=()=>{
        setTodoDisplay(prevState=>{
            [...prevState, ]
        })
    }

    console.log(todoDisplay)
    return(
    <div id="MainContainer">
        <p>
            <HeaderDate/>
            <div className="todoContainer">
            {todoDisplay}
            </div>
            <Button/>
        </p>
    </div>

    )
}

export default MainContainer;