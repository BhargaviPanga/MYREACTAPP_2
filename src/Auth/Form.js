import { useState } from "react"
function Form(){


  var [Course ,setCourse] = useState("")
  var [Gender ,setGender] = useState("")
  var[weliveintime ,setweliveintime] = useState(false)
  var[TheDeathNote ,setTheDeathNote] = useState(false)
  var[FinalDestination ,setFinalDestination] = useState(false)

  function handlecourse(event){
    setCourse(event.target.value)
  }
 function handleGender(event){
  setGender(event.target.value)
 }
 function handleweliveintime(event){
   if (event.target.checked == true ){
    setweliveintime(true)
     }else {
      setweliveintime(false)
     }
 }

 function handleDeathNote(event){
  if (event.target.checked == true){
    setTheDeathNote(true)
  }else{
    setTheDeathNote(false)
  }
 }

 function handlefinaldestination(event){
  if(event.target.checked ==true){
    setFinalDestination(true)
  }else{
    setFinalDestination(false)
  }
 }

      return(
        <div className="container">
          <div className="row">
            <div className="col-4">
                <h3>Form data</h3>
                <div>
                  <label>Courses</label>
                  <select className="form-select" onChange={(event) => handlecourse(event) }>
                    <option>React</option>
                    <option>Angular</option>
                    <option>Vue</option>
                    <option>Spring boot</option>
                    <option>Datascience</option>
                  </select>
                </div>
                <div>
                 <label>Gender</label>
                 </div>
                 <div className="form-check" >
                 <input className="form-check-input" type="radio" value="male" name ="gender" onChange={event =>handleGender(event)}/>
                  <label className="form-check-label">Male</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="radio" value="Female" name ="gender" onChange={event =>handleGender(event)}/>
                  <label className="form-check-label">Female</label>
                </div>
                <div>
                  <label> Favourite movies</label>
                  
                  <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="we live in time" onChange={event =>handleweliveintime(event)} />
                  <label className="form-check-label">we live in time</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="The Death Note" onChange={event =>handleDeathNote(event)}/>
                  <label className="form-check-label">The Death Note</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="Final Destination" onChange={event =>handlefinaldestination(event)} />
                  <label className="form-check-label">Final Destination</label>
                </div>
                <div className="mt-3">
                  Course:{Course} <br/>
                 Gender:{Gender}<br/>

                weliveintime:{weliveintime.toString()}<br/>
                TheDeathNote:{TheDeathNote.toString()}<br/>
                FinalDestination:{FinalDestination.toString()}<br/>
                </div>
                </div>
            </div>
          </div>
        </div>
      )
}


export default Form