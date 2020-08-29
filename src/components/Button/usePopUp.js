import React, {useState} from "react";

const usePopUp=()=>{
    const [popUp, setPopUp] = useState("none")
    const showPopUp=(e)=>{
        setPopUp(prevState=>prevState==="none"? "block" : "none")
    }

    return {popUp, showPopUp}
}

export default usePopUp