import React from "react";
import "./LeftSidebar.css";
import logo2 from './logo.png';
import HomeIcon from '@material-ui/icons/Home';
//import TagRoundedIcon from '@material-ui/icons';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@material-ui/icons/BookmarkBorderRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import anika from './anika.jpg';


function LeftSidebar()

{
    return (

    <div className="leftsidebar">
    <div className="public_div">

         <img  className="twitter" src={logo2}/>
    

        <div className="public">
      
   
        <h4>  <HomeIcon/> <b> Home </b></h4>
        
        <br/>
        </div>
       

        <div className="public">
        <h4># Explore</h4>
        <br/>
        </div>
   

        <div className="public_notification">
       
        <h4>  <NotificationsNoneRoundedIcon/> Notifications</h4>
       
        <br/>
        </div>
        

        <div className="public">
      
        <h4>   <MailOutlineRoundedIcon/> Messages</h4>
        <br/>
        </div> 
       

        <div className="public">
        <h4><BookmarkBorderRoundedIcon/>Bookmarks</h4>
        <br/>
        </div>


        <div className="public">
        <h4> <ListAltRoundedIcon/>Lists</h4>
        <br/>
        </div>
        
        

        <div className="public">
        <h4><PermIdentityRoundedIcon/>Profile</h4>
        <br/>
        </div> 
        

        <div className="public">
       <h4> <MoreHorizRoundedIcon/> More</h4>
        <br/>
        </div> 

        <button className="button"> Tweet </button>

        </div>
        
        
        <div className="username">

        <h4> <img src = {anika} /> Aneka  </h4>
        <h5><a href="https://twitter.com/anika_sapkota">
        @anika_sapkota</a> </h5>
        
         </div>
         </div>


 
    );   
};


export default LeftSidebar;