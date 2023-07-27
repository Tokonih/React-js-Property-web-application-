import { useState } from "react"
import Sidebar from "./sidebar"

function CreateUser(){
    const [email, setEmail]= useState('')
    const [password, SetPassword] = useState('')
    const [err, SetErr] = useState(false)


    const handleSubmit =(e)=>{
        e.preventDefault()
        if(email===""|| password === ""){
            SetErr(true)
            return
        }

        const userDetails = {
           
            email: email,
            password: password
        }
        // setName('')
        // setEmail('')
        // SetPhone('')
        // SetPassword('')
        console.log(userDetails)

        // let getToken = localStorage.getItem("Merchant_Token")

        fetch("http://property.reworkstaging.name.ng/v1/auth/login",{
            method:"Post",
            headers:{"Content-Type":"application/json"},
              body:JSON.stringify(userDetails)
        }).then((resp)=> resp.json())
        .then((data)=> {
            
            alert("Login Successful")
            const getToken =data.data.token
             localStorage.setItem("Agent_Token", getToken)
            console.log(data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }





    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Admin Login</h1>
                </div>
                  <div>
                <div className="user-form">
                <form onSubmit={handleSubmit}>
                    

                    <div>
                        <label>Email</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} />
                        {err=== true && email === ""  ? <span>Email required</span> : email=== null}

                    </div>
                   
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e)=> SetPassword(e.target.value)} value={password}/>
                        {err=== true && password === ""  ? <span>Enter required</span> : password=== null}

                    </div>
                    <button>Create user</button>
                </form>
                </div>
              </div>
            </div>

       </div>
    )
}

export default CreateUser