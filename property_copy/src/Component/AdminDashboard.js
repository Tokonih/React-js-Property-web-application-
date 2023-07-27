import Sidebar from "./sidebar";
import { IoHomeOutline, IoCashOutline, IoHeartOutline } from "react-icons/io5";
import { GoVerified,GoPeople , GoCodeReview} from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
import { useState } from "react";
import Users from "./Users";
function AdminDashboard() {
    // const [users, setUsers]=useState()
    let getUsers = localStorage.getItem("Total Users")
    let getAgents = localStorage.getItem("Total Agents")
    let TotalProperties = localStorage.getItem("Total Properties")
    let TotalPropertyPrice = localStorage.getItem("Total Property Price")
    let TotalUnverifiedProperies = localStorage.getItem("Total Unverified Properies")
    // setUsers(getUsers)
  return (
    <div className="side-main">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="side-container">
        <div className="Dashboard">
          <h1 className="sidebar-title">Dashboard</h1>
        </div>
        <div className="totals">
          <div className="totalItems">
            <h2>
              <IoHomeOutline/> properties: <span className="TotalDetails">{TotalProperties}</span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
            <IoCashOutline/> properties worth: <span className="TotalDetails">{TotalPropertyPrice} Million</span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
             <GoVerified/> unverified properties : <span className="TotalDetails">{TotalUnverifiedProperies}</span>
            </h2>{" "}
          </div>
        </div>

        <div className="totals">
          <div className="totalItems">
            <h2>
            <GoPeople/> Agents:  <span className="TotalDetails">{getAgents}</span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
              <AiOutlineSchedule/> Appointment: <span className="TotalDetails"></span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
              <FcApproval/>Approved Appointment: <span className="TotalDetails"></span>
            </h2>{" "}
          </div>
        </div>

        <div className="totals">
          <div className="totalItems">
            <h2>
            <GoPeople/> Users:    <span className="TotalDetails">{getUsers}</span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
             <IoHeartOutline/> Wishlist: <span className="TotalDetails"></span>
            </h2>{" "}
          </div>
          <div className="totalItems">
            <h2>
           <GoCodeReview/>   Reviews: <span className="TotalDetails"></span>
            </h2>{" "}
          </div>
        </div>
        <div>
          <table>
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
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
