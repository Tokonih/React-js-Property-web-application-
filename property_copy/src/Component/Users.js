import { useState } from "react";
import Sidebar from "./sidebar"
import { useEffect } from "react";

function Users(){
    const [users, setUsers]= useState()
    let getToken = localStorage.getItem("Merchant_Token")
    useEffect(()=>{
        fetch('http://property.reworkstaging.name.ng/v1/users',{
            headers: {"Content-type": "Application/json",
          "authorization": `Bearer ${getToken}`}
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            setUsers(data.data)
            console.log(data)
            console.log(data.data.length)
            localStorage.setItem("Total Users", data.data.length)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])


    
    const deleteUser=(id)=> {
        if(window.confirm("Do you want to delete this User? ")){
            fetch(`http://property.reworkstaging.name.ng/v1/users/${id}`,{
                method: "DELETE",
                headers: {"Content-Type": "Application/json",
            "authorization" : `Bearer ${getToken}`}
            })
            .then((resp)=> {
                alert("User Deleted")
                const Update = resp.data.filter((user)=> user.id != id)
                 setUsers(Update)

            }).catch((err)=> {
                console.log(err.message)
            })
            
        }
       
        
    }
    return(
       <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Users</h1>
                </div>
              
            <div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    {users && users.map((user)=>(
                    <tr>

                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><button className="Detailsbtn">Details</button> <button className="editbtn">Edit</button> <button className="deletebtn" onClick={()=> deleteUser(user.id)}>Delete</button></td>
                    </tr>
                    ))}
                </table>
            </div>
            </div>

       </div>
    )
}

export default Users;