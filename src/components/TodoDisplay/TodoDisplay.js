import React, {useState} from "react";

const TodoDisplay=(props)=>{
    
    const [isCompleted, setIsCompleted]=useState(props.item.completed)
    const handleCheckBox=(id)=>{
        console.log(id, props.item.completed)
        if(props.item.id===id){
            setIsCompleted(prevState=>!prevState)
        }
    }
    
    const style={
        color : "gray",
        textDecoration : "line-through"
    }

    return(
        <div className="todoItems">
            <p style={isCompleted ? style : {color:"black"}}>
                {props.item.text}
            </p>  
                <input 
                type="checkBox" 
                checked={isCompleted}
                onChange={()=>handleCheckBox(props.item.id)}/>

            
        </div>
    )
}

export default TodoDisplay