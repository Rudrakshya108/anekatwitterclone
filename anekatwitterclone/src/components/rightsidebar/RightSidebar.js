import React from "react";
import "./RightSidebar.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
function RightSidebar()


{
    return ( 

        <div className= "rightsidebar">

            <div className = "search-container">
            <h5> <SearchRoundedIcon/> Search Twitter</h5> 

            </div>
            <br/>

            <div >
                <h5> Trends for you</h5> 
                        <div>

                            <h6>Trending in Nepal</h6>
                            <h5>#NEPSE</h5>
                        
                        </div>
                        <br/>
                        <div>

                            <h6>Trending in Nepal</h6>
                            <h5>#voteforbalenshah</h5>
                        
                        </div>
                        <br/>

                        <div>

                            <h6>Trending in Nepal</h6>
                            <h5>#voteforbalenshah</h5>
                        </div>
                        <br/>

                        
                        <div>
                            <h6>Travel Trending</h6>
                            <h5>Maserati</h5>
                            <h6>3,732 Tweets</h6>
                        </div>
                        <br/>

                        <div>
                            <h6>Trending in Nepal</h6>
                            <h5>Pokhara</h5>
                            <h6>3,73 Tweets</h6>
                        </div>
                        <br/>

                        <div>
                            <h6>Trending in Nepal</h6>
                            <h5>Europe</h5>
                            <h6>194K Tweets</h6>
                        </div>
                        <br/>

                        <div>
                            <h6>Trending in Nepal</h6>
                            <h5>Elon Musk</h5>
                            <h6>192k Tweets</h6>
                        </div>

                        <div>
                        <h6 color="blue"> Show More</h6>
                        </div>

       
                </div>
            
        
        
        </div>
    );
};

export default RightSidebar;