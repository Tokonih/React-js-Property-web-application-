import { useState, useEffect } from "react"
import Sidebar from "./sidebar"
import Merchants from "./Merchant"
import { useNavigate } from "react-router-dom"

function MerchantLogin(){
    const [email, setEmail]= useState('')
    const [password, SetPassword] = useState('')
    const [err, SetErr] = useState(false)
    // const [token, setToken] = useState('')
    const Navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        if( email==="" || password === ""){
            SetErr(true)
            return
        }

        const MerchantDetails = {
            email: email,
            password: password
        }
        console.log(MerchantDetails)

        fetch('http://property.reworkstaging.name.ng/v1/auth/login',{
            method:"POST",
            headers: {"content-type" : "Application/Json"},
            body: JSON.stringify(MerchantDetails)
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            console.log(data)
            const getToken = data.data.token
            const merchantData = data.data.id
            console.log(merchantData)
            localStorage.setItem("Merchant_Token", getToken )
            localStorage.setItem("merchant_Data_id", merchantData) 
            alert("Merchant Login Successful")
            Navigate("/AdminDashboard")
    })
        .catch((err)=> {
            alert("Merchant Email or Pessword is incorrect")
            console.log(err.message)
        })
    }
    // const creatAgent =()=>{
    // }
    
    // useEffect(()=>{
    //     creatAgent()
    // },[])



    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title"> Merchant Login</h1>
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
                    <button> Merchant Login</button>
                </form>
                </div>
              </div>
            </div>

       </div>
    )
}

export default MerchantLogin;