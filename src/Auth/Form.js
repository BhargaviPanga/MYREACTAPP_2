import { useState } from "react"
function Form(){


  var [Course ,setCourse] = useState("")
  var [Gender ,setGender] = useState("")
  var[weliveintime ,setweliveintime] = useState("")
  var[TheDeathNote ,setTheDeathNote] = useState("")
  var[FinalDestination ,setFinalDestination] = useState("")

  function handlecourse(event){
    setCourse(event.target.value)
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
                 <div className="form-check">
                 <input className="form-check-input" type="radio" value="male" name ="gender"/>
                  <label className="form-check-label">Male</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="radio" value="Female" name ="gender"/>
                  <label className="form-check-label">Female</label>
                </div>
                <div>
                  <label> Favourite movies</label>
                  <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="we live in time" />
                  <label className="form-check-label">we live in time</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="The Death Note" />
                  <label className="form-check-label">The Death Note</label>
                </div>
                 <div className="form-check">
                 <input className="form-check-input" type="checkbox" value="Final Destination" />
                  <label className="form-check-label">Final Destination</label>
                </div>
                </div>
            </div>
          </div>
        </div>
      )
}

export default Form