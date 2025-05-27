import { validateEmail } from "../Utils/utils"
import { useState } from "react"
function Login(){

    var[email, setEmail] = useState("")
    var[password, setPassword] = useState("")
   
    var[emailError, setEmailError] = useState("")
    var[passwordError, setPasswordError] = useState("")

    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
   function handlelogin(event){
     if (validateEmail(email)){
        setEmailError("")

     }else{
        setEmailError("Invalid Email")

     }

     if(password.length >= 8){
        setPasswordError("")
     }else{
        setPasswordError("Password must be more than 8 characters")
     }

   }

  
return(
    <div className="container">
        <div className="row">
            <div className="col-4">
                <h3>Login</h3>
                <div className="mt-3">
                    <label>Email</label>
                    <input type="email" placeholder="Email" onChange={(event) => handleEmailChange(event)} className="form-control" />
                      <div className="text-danger">{emailError}</div>
                </div>
                <div className="mt-3">
                    <label>Password</label>
                    <input type="Password" placeholder="Password" onChange={(event) => handlePasswordChange(event)} className="form-control" />
                    <div className="text-danger">{passwordError}</div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={event => handlelogin(event)}>Login</button>
                </div>
            </div>
        </div>
    </div>
)
}


export default Login