import { FaAngleRight, FaAngleLeft} from "react-icons/fa6";
import { FaShareAlt, FaHeart, FaCheck,FaWhatsapp,FaPhone,FaEnvelope,FaMinus} from "react-icons/fa";
import { ImPrinter } from "react-icons/im";

import { LiaBathSolid,LiaBedSolid, LiaExpandSolid,LiaBusAltSolid,LiaCalendarAlt} from "react-icons/lia";
import { GrPan  } from "react-icons/gr";
// import image011 from "../img/House-Design-1240x720.jpg"
// import image012 from "../img/agent-male-1-1.jpg"
// import image013 from "../img/floor-plan-00.jpg"
import Footer from "../UsersPage/Footer"


function Productdetails() {
  return(
<div>
  <div className="cover-divv">
<div className="first-divv">
<div className="first-div-innerd">
<div className="displayed-flexed">
  <p>Home</p>
  <FaAngleRight className="arrow-icon"/>
  <p>Miami</p>
</div>
<p className="villagrand"> Villa on Grand Avenue</p>
<p className="cocowalk">CocoWalk, 3015 Grand Avenue, Miami, FL 33133 USA</p>
</div>
<div className="first-div-innerd02">
  <div className="lin-divv">
  <hr className="line-rotate" />
  <div className="gaup-div">
  <p className="for-renttt">For Rent</p>
  <p className="guap">$4,740 Monthly</p>
  </div>

  </div>

</div>
</div>
<div className="second-div">
<img src="" alt="" />
<FaAngleRight className="fangle-right"/>
<FaAngleLeft className="fangle-left"/>
</div>


<div className="third-div">
  <div className="third-div-innerd1">
    <div className="upper-sec">
<p className="upper-sec-p">Property ID <span className="span-blue">RH-2017-09</span></p>
<div className="share-cont">
  <FaShareAlt className="share-icon"/>
  <FaHeart className="below-heart"/>
  <ImPrinter className="below-print"/>
</div>
    </div>

    <hr  className="newest-lined"/>
    <div className="cont-props">
      <div className="moving-div">
        <p>Bedroom</p>
        <div className="icon-divsss">
        <LiaBedSolid className="icon01"/>
        <p className="icon01-p">4</p>
        </div>
        

      </div>
      <div className="moving-div">
        <p>Bathroom</p>
        <div className="icon-divsss">
        <LiaBathSolid className="icon01"/>
        <p className="icon01-p">4</p>
        </div>
        

      </div>
      <div className="moving-div">
        <p>Garage</p>
        <div className="icon-divsss">
        <LiaBusAltSolid className="icon01"/>
        <p className="icon01-p">2</p>
        </div>
        

      </div>
      <div className="moving-div">
        <p>Year Built</p>
        <div className="icon-divsss">
        <LiaCalendarAlt className="icon01"/>
        <p className="icon01-p">2018</p>
        </div>
        

      </div>
      <div className="moving-div">
        <p>Area</p>
        <div className="icon-divsss">
        <LiaExpandSolid className="icon01"/>
        <p className="icon01-p">9350 <span className="sq15">sq ft</span></p>
        </div>
        

      </div>
      <div className="moving-div">
        <p>Lot Size</p>
        <div className="icon-divsss">
        <GrPan className="icon01"/>
        <p className="icon01-p">9350 <span className="sq15">sq ft</span></p>
        </div>
        

      </div>
    </div>
    <p className="descript001">Description</p>
    <p className="detailed-descript">Spacious and fabulous home in prime location. This executive style four bed, four bath home has <br /> impact resistant windows, renovated kitchen with wood cabinets, granite countertops and <br /> luminous breakfast area. All bathrooms are tastefully redone with contemporary elements  and <br /> vanities.</p>
    <p className="detailed-descript02">
    Open floor plan leads to the patio, pool and backyard for great entertainment or relaxation. Live in the city beautiful, enjoy the best shopping, restaurants, schools, and much more this home offers.
    </p>
    <p className="descript001">Features</p>
    <div className="before-floorplan">
<div className="before-floorplan-innerd">
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">2 Stories</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2"> Electric Range</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">Laundry Room</p>
</div>
</div>
<div className="before-floorplan-innerd02">
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">Central Cooling</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2"> Fire Price</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">Marble Floor</p>
</div>
</div>
<div className="before-floorplan-innerd02">
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">Daul Sinks</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2"> Home Theater</p>
</div>
<div className="before-floorinners">
<FaCheck className="facheck"/>
<p className="stories2">Swimming Pool</p>
</div>
</div>


    </div>
    <div className="floor-planofbelow">
  <button className="floor-belowbutton"></button>
<div className="absolutebutton-display">
<FaMinus className="minus-iconfllorplan"/>
<p className="floorplan-p">Sample Plan</p>


</div>
<div className="coverage-image013">
<img className="image013" src='' alt="" />
</div>
</div>
  </div>
  <div className="third-div-innerd2">
    <div className="agent-divv"> 
      <h4 className="nathan-div">Agent Nathan James</h4>
      <p>Office: 1-222-333-4444</p>
      <p>Mobile: 1-222-333-4444</p>
      <p>Fax: 1-222-333-4444</p>
      <p>Whatsapp: 1-222-333-4444</p>
      <p>Email: thebotfakaa@gmail.com</p>
      <button className="view-button">View My Listing</button>
      <form action="">
        <label htmlFor="">
          <p className="name-p">Name</p>
          <input className="input0001" type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          <p className="name-p">Email</p>
          <input className="input0001" type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          <p className="name-p">Phone</p>
          <input className="input0001" type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          <p className="name-p">Message</p>
          <textarea name="" className="input00010" id="" cols="30" rows="10"></textarea>
        </label>
        <p className="gdpr">GDPR Agreement*</p>
        <div>
          <button className="whatsapp-btn1">Whatsapp</button>
          <FaWhatsapp className="whatsapp-icon"/>
          <button className="call-btn2">Call Now</button>
          <FaPhone className="phone-icon"/>
        </div>
        <button className="message-button">Send Message</button>
        <FaEnvelope className="message-icon"/>
      </form>
      
      </div>
   
  </div>
  <div className="absolute-div">
    <img src="" alt="" />
  </div>
</div>
  </div>
  <Footer/>
</div>
  )
}

export default Productdetails