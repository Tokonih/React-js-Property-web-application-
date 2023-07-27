
import { VscPreview } from "react-icons/vsc";
import { LuBed, LuBath } from "react-icons/lu";
import Sidebar from "./sidebar";
import { useState } from "react";
import { useEffect } from "react";
// import Properties from "./Properties";
// import { json } from "react-router-dom";

// import logo from "../img/logo.png"
// import IoBedOutline from "react-icons/io5";
// import  PiBathtubLight  from "react-icons/pi";
// import   PiBedThin from "react-icons/pi";
function UnverifiedProp() {

    const [unverified, setUnverified]= useState([])
    const [verify, setverify]= useState()
    // const [del, setdel]=useState()
    let getToken = localStorage.getItem('Merchant_Token')
    useEffect(()=>{
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=false',{
            method: "GET",
            headers: {'Content-Type' : 'Applcation/json',
            "authorization" : `Bearer ${getToken}`
        }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
          setUnverified(data.data)
          console.log(data.data.length)
          localStorage.setItem("Total Unverified Properies", data.data.length)
          
          console.log(data)
        })
        .catch((error)=> {
          console.log(error.message )
        })
    },[])

    const verification =(propId)=>{       
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=false',{
            method: "GET",
            headers: {'Content-Type' : 'Applcation/json',
            "authorization" : `Bearer ${getToken}`
        }
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            const updatedData = data.data.find((item)=>{
                if(item.id===propId){
                        item.is_verified = true 
                        setverify(item.is_verified)
                        localStorage.setItem("is_verified", JSON.stringify(item))
                        console.log(item)

                        fetch(`http://property.reworkstaging.name.ng/v1/properties/${item.id}/set-verified`,{
                            method:"PUT",
                            headers:{"Content-Type" : "Application/json",
                            "authorization" : `Bearer ${getToken}`
                        },
                        body:JSON.stringify({is_verified:true})
                        })
                        .then((response)=>{
                            if(!response){
                                throw new Error ("Failed to update property verification")
                            }else{
                                alert("Verification successful")
                                console.log(response)
                            }
                        })
                        .catch((err)=>{
                            console.log(err.message )
                        })
                }
            })
            console.log(updatedData)

        })
        .catch((error)=> {
          console.log(error.message )
        })
    }


    
    let merchantToken = localStorage.getItem('Merchant_Token')
    const DeleteProperty= (id)=>{
      fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`,{
        method:"DELETE",
        headers:{"authorization" : `Bearer ${merchantToken}`}
      })
      .then((resp)=> resp.json())
      .then((data)=>{
        const updateDelete = data.filter((del)=> del.id !== id)
        setUnverified(updateDelete)
        // console.log(del.id)
        console.log(data)
      })
      .catch((err)=> err.message)
    }

    
    // const validated = (propertyID)=>{
    //     let merchantKey = localStorage.getItem('Merchant_Token')
    //     let get_isVerified = JSON.parse(localStorage.getItem("is_verified")) 
    //     fetch('http://property.reworkstaging.name.ng/v1/properties',{
    //         method:"POST",
    //         headers: {"Content-Type" : "Application/json",
    //         "authorization": `Bearer ${merchantKey}`},
    //         body:JSON.stringify(get_isVerified)
    //     })
    //     .then((resp)=>resp.json())
    //     .then((data)=> {
    //         const validatedProperty = data.data.find((verified)=> verified.id === propertyID && verified.is_verified === true)
    //         if(validatedProperty){
    //             alert('Property posted successfully')
    //             console.log(validatedProperty)
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //    console.log(get_isVerified)
        
    // }
    // useEffect(()=>{
    //     verification()
    // },[])

  

    // console.log(unverified)

    let getUsers = localStorage.getItem("Total Users")
    let getAgents = localStorage.getItem("Total Agents")
    let TotalProperties = localStorage.getItem("Total Properties")
    let TotalPropertyPrice = localStorage.getItem("Total Property Price")
    let TotalUnverifiedProperies = localStorage.getItem("Total Unverified Properies")
  return (
    <div className="side-main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="side-container">
        <div className="Dashboard">
          <h1 className="sidebar-title">Unverified Properties</h1>
        </div>
        <div className="totals">
          <div className="totalItems">
            <h1>
              Total Unverified properties: <span className="TotalDetails">{TotalUnverifiedProperies}</span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
              Total Agents: <span className="TotalDetails">{getAgents}</span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
              Total Users: <span className="TotalDetails">{getUsers}</span>
            </h1>{" "}
          </div>
        </div>
        <div>
            <div className="unverified-props-wrap">

                <table className="unverified-props">
                    <thead>
                        <th>Agent Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>View</th>
                        <th>Action</th>
                    </thead>
                    { unverified && unverified.map((item)=>(
                                        <tr>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>{item.image}</td>
                                        <td>{item.country}</td>
                                        <td>...</td>
                                        <td>{item.state}</td>
                                        <td>{item.city}</td>
                                        <td title="View"><VscPreview className="view-unverified-props"/></td>
                                        <td className="Actions"><button title="Verify" onClick={()=>verification(item.id)}>Verify</button> <button onClick={()=> DeleteProperty(item.id)}>Delete</button></td>
                                    </tr>
                    ))}

                </table>
            </div>
          {/* <table>
                    <tr>
                        <th>Property</th>
                        <th>Agent</th>
                        <th>Users</th>
                    </tr>
                    <tr>
                        <td>Duplex</td>
                        <td>Tokonih</td>
                        <td>Standwell</td>
                    </tr>
                </table> */}
        </div>
      </div>
    </div>
  );
}
export default UnverifiedProp;
