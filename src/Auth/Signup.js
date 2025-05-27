import { useState } from "react"
import { validateEmail } from "../Utils/utils"

function Signup() {

 
  var [Name, setName] = useState("")
  var [Email, setEmail] = useState("")
  var [Mobile, setMobile] = useState("")
  var [Password, setPassword] = useState("")  
  
  //error varibles
  var [NameError, setNameError] = useState("")
  var [EmailError, setEmailError] = useState("")
  var [MobileError, setMobileError] = useState("")
  var [PasswordError, setPasswordError] = useState("")

     function handleNameChange(event){
      setName(event.target.value)
     }
     function handleEmailChange(event){
      setEmail(event.target.value)
         
     }
     function handleMobileChange(event){
      setMobile(event.target.value)
     }

     function handlePasswordChange(event){
       setPassword(event.target.value)
     }
     
     function handleCreateACcount(){
           var noOfErrors = 0;
          if (Name.length < 3){
              setNameError("Name must be more than 3 characters")
              noOfErrors++; 
          }else{
            setNameError("")
          }

          if (validateEmail(Email)) {
          setEmailError("")
          noOfErrors++;
           } else  {
          setEmailError("Invalid Email")
           }

           if (Mobile.length == 10 ){
            setMobileError("")
            noOfErrors++;
           }else{
            setMobileError("Mobile number is invalid")
           }
          
          if (Password.length >= 8){
            setPasswordError("")
            noOfErrors++;
          }else{
            setPasswordError("Password must be more than 8 characters")
          }
          if(noOfErrors == 0){
            console.log("calling api", noOfErrors);
          }
     }
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h3>Create Account</h3>

                       <div className="mb-3 mt-3">
                    
                        <label>Name </label>
                        <input type="text"onChange={event => handleNameChange(event)} className="form-control" placeholder="Enter your Name"></input>
                       </div>
 
                       <div className="text-danger">{NameError}</div>
                     <div className="mb-3 mt-3">
                    
                    <label>Email </label>
                    <input type="text"onChange={event => handleEmailChange(event)} className="form-control" placeholder="Enter your Email"></input>
                    <div className="text-danger">{EmailError}</div>
                   </div>

                    <div className="mb-3 mt-3">
                        <label>Mobile</label>
                        <input type="text"onChange={event => handleMobileChange(event)} className="form-control" placeholder="Enter your Mobile Number"></input>
                        <div className="text-danger">{MobileError}</div>
                    </div>
                    
                    <div className="mb-3 mt-3">
                        <label>Password</label>
                        <input type="password" onChange={event => handlePasswordChange(event)} className="form-control" placeholder="Enter your password"></input>
                        <div className="text-danger">{PasswordError}</div>
                    </div>
                    <div>
                        <button className="btn btn-primary"onClick={event => handleCreateACcount(event)}>Create Account</button>
                    </div>
                    {
                        Name

                    }
                    <br/>
                    {
                        Email
                    }
                   <br/>
                    {
                        Mobile
                    }
                     <br/>
                    {
                        Password
                    }
               </div>
             </div>   
            
        </div>
    )
}

export default Signup
