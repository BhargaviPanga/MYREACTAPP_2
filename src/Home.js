import Form from "./Auth/Form";

function Home () {
    return  (
        <div>
            <div>
             <h2>Coding is easy</h2>
             <a href="/create-Account">Signup</a>
             <br/>
             <a href="/signin">Login</a>
             </div>
            <Form/>
        </div>
       
    )
}

export default Home;