import { useEffect, useState } from "react";
import Sidebar from "./sidebar"
function Agents(){
    const [Agents, setAgents] = useState()
    let getToken = localStorage.getItem('Merchant_Token')
    useEffect(()=>{
        fetch('http://property.reworkstaging.name.ng/v1/merchants/agents',{
            headers:{'Content-Type' : "Application/json",
            'Authorization': `Bearer ${getToken}`
        }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            setAgents(data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }, [])
    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Agents</h1>
                </div>
               {/* <div className="totals">
                <div className="totalItems"><h1>Total properties: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Agents: <span></span></h1> </div>
                <div className="totalItems"><h1>Total Users: <span></span></h1> </div>
                <div className="totalItems"><h1>Wishlist: <span></span></h1> </div>
                <div className="totalItems"><h1>Appointment: <span></span></h1> </div>
               </div> */}
            <div>
            <table className="unverified-props">
                    <thead>
                        <th>Agent Name</th>
                        <th>Company</th>
                        <th>Email</th>
                       <th> Action</th>
                    </thead>
                    { Agents && Agents.map((item)=>(
                                        <tr>
                                        <td>{item.full_name}</td>
                                        <td>{item.company}</td>
                                        <td>{item.email}</td>
                                     
                                       
                        <td><button className="Detailsbtn">Details</button> <button className="editbtn">Edit</button> <button className="deletebtn">Delete</button></td>
                                    
                                    </tr>
                    ))}

                </table>
            </div>
            </div>

       </div>
    )
}

export default Agents;