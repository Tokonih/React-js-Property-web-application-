
import { LuBed, LuBath } from "react-icons/lu";
import Sidebar from "./sidebar";
import { json } from "react-router-dom";
import { useEffect, useState } from "react";

function Properties() {
    const [verified, setverified]= useState()
    const [total, settotalPrice]= useState()
    let getToken = localStorage.getItem('Merchant_Token')
    useEffect(()=>{
        fetch('http://property.reworkstaging.name.ng/v1/properties?merchant=64b7cd2411d45559c8840b5a&verified=true',{
            headers:{'authorization': `Bearer ${getToken}`}
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            setverified(data.data)
            console.log(data.data.length)
            (data.data.length)
            localStorage.setItem("Total Properties", data.data.length)
          })
          .catch((err)=>{
            console.log(err.message)
          })
        },[])

        useEffect(()=>{
          if(verified && verified.length > 0){

            const totalPrice = verified.map(property => parseInt(property.price.replace(/, /g,"" )))
            .reduce((a, b)=> a + b, 0)
            settotalPrice(totalPrice)
            localStorage.setItem("Total Property Price", totalPrice)
            console.log(total)
          }
        }, [verified])          
        
    let merchantToken = localStorage.getItem('Merchant_Token')
        const DeleteProperty = (id)=>{
          if(window.confirm("Do you want to delete this property?")){
            fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`,{
              method: "DELETE",
              headers:{"authorization" : `Bearer ${merchantToken}`}
            })
            .then((data)=> data.json())
            .then((resp)=>{
              alert("Property Deleted")
              const updatecart = resp.filter((cartitem)=> cartitem.id !== id)
              setverified(updatecart)
            }).catch((err)=>{
              console.log(err.message)
            })
          }
        }

    // const DeleteProperty = (id)=>{
    //   // alert('right')
    //   fetch(`http://property.reworkstaging.name.ng/v1/properties/${id}`,{
    //     method:"DELETE",
    //     headers:{"authorization" : `Bearer ${merchantToken}`}
    //   })
    //   .then((resp)=> resp.json())
    //   .then((data)=>{
    //     const updateDelete = data.filter((del)=> del.id !== id)
    //     setverified(updateDelete)
    //     // console.log(del.id)
    //     console.log(data)
    //   })
    //   .catch((err)=> err.message)
    // }

    let TotalProperties = localStorage.getItem("Total Properties")
    let getUsers = localStorage.getItem("Total Users")  
  
  return (
    <div className="side-main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="side-container">
                <div className="Dashboard">
                   <h1 className="sidebar-title">Dashboard</h1>
                </div>
               <div className="totals">
                <div className="totalItems" ><h1>Total properties: <span style={{"color": "#0C54A6"}}>{TotalProperties}</span></h1> </div>
                <div className="totalItems"><h1>Total Worth: <span style={{"color": "#0C54A6"}}><br></br> {total} Million</span></h1> </div>
                <div className="totalItems"><h1>Total Review: <span style={{"color": "#0C54A6"}}>{}</span></h1> </div>
               </div>
            <div>

            <div className="prp-banner">
        <div className="product-grid">
        
          <div className="prop-detail">
            <div className="property-card">
              {/* <div className="prop-detail"> */}
                    {verified && verified.map((property)=>(
                <div className="property-dsc">

                <img src={property.image } alt="" />
                    <div className="price-details">
                        <button className="prop-price">${property.price}</button>
                        <h6>{property.category}</h6>
                        <h6>{property.address}</h6>
                        <h3>{property.state}, {property.country}</h3>
                        <h6><LuBed className="shower"/> {property.bedroom} beds <LuBath className="shower"/> {property.bathroom} baths</h6>
                        <button className="editbtn">Edit</button> <button className="deletebtn" onClick={()=>DeleteProperty(property.id)}>Delete</button>

                        {/* <button className="see-detail">See details</button> */}
                    </div>
                </div>
                    ))}

               

            
            </div>

            <div className="Pagination">
                <p>Pagination (1 of 10)</p>
                <div>
                    <button className="pages">1</button>
                    <button className="pages">2</button>
                    <button className="pages">3</button>
                    <button className="pages">4</button>
                </div>
            </div>
          </div>
        </div>
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
export default Properties;
