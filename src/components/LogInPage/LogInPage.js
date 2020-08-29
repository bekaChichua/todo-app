import React,{useState} from "react"


const LogInPage=()=>{
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleEmailChange=(e)=>{
    const {value}=e.target
    setEmail(value)
}

const handlePasswordChange=(e)=>{
    const {value}=e.target
    setPassword(value)
}

console.log(password)
    return (
        <form>
            <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange}
                placeholder="Enter your email here"/>
            <input 
                type="text" 
                name="password" 
                value={password} 
                onChange={handlePasswordChange}/>
        </form>
    )
}


export default LogInPage;