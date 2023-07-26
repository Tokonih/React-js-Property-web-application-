import Sidebar from "./sidebar";
import { IoHomeOutline, IoCashOutline, IoHeartOutline } from "react-icons/io5";
import { GoVerified,GoPeople , GoCodeReview} from "react-icons/go";
import { AiOutlineSchedule } from "react-icons/ai";
import { FcApproval } from "react-icons/fc";
function AdminDashboard() {
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
            <h1>
              <IoHomeOutline/> properties: <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
            <IoCashOutline/> properties worth: <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
             <GoVerified/> unverified properties : <span></span>
            </h1>{" "}
          </div>
        </div>

        <div className="totals">
          <div className="totalItems">
            <h1>
            <GoPeople/> Agents:  <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
              <AiOutlineSchedule/> Appointment: <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
              <FcApproval/> Appointment: <span></span>
            </h1>{" "}
          </div>
        </div>

        <div className="totals">
          <div className="totalItems">
            <h1>
            <GoPeople/> Users:    <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
             <IoHeartOutline/> Wishlist: <span></span>
            </h1>{" "}
          </div>
          <div className="totalItems">
            <h1>
           <GoCodeReview/>   Reviews: <span></span>
            </h1>{" "}
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
