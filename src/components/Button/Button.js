import React, {useState} from "react";
import "./Button.css"
import usePopUp from "./usePopUp"

const Button=()=>{
    const {popUp, showPopUp} = usePopUp()
    const {todoText, setTodoText} = useState("")
    console.log(popUp, "butoooooooon")

    const handleTodoTextChange=(e)=>{
        const [name, value]=e.target
        setTodoText(value)
    }
    console.log(todoText)
    return(
        <div>
            <div>
                <div id="createNewTodo" style={{display:popUp}}>
                    <input 
                    type="text" 
                    id="createNewTodoInput"
                    name="todoText"
                    value={todoText}
                    onChange={handleTodoTextChange}/>
                    <hr style={{width:"50%"}}></hr>
                    <button id="createNewTodoButton">Submit</button>
                </div>
                <div id="blur" style={{display: popUp}}></div>
            </div>
                    <button id="greenButton" onClick={()=>showPopUp()}>+</button>
        </div>
    )
}

export default Button