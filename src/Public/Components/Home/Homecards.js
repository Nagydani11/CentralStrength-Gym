import React from "react";
import homecardoneimg from './imges/homecard1.jpg';
import homecardtwoimg from './imges/homecard2.jpeg';
import homecardthreeimg from './imges/homecard3.jpg';


export default function Homecards(){
    return(
        <div className="homecards">
            <h1>REGARDLESS OF YOUR LEVEL GO FOR IT!</h1>
            <div className="wraphomecards">
                <div className="homecard">
                    <img src={homecardoneimg}/>
                    <h3>What you want</h3>
                    <p>With the best equipment</p>
                </div>
                <div className="homecard">
                    <img src={homecardtwoimg}/>
                    <h3>What you want</h3>
                    <p>With the best equipment</p>
                </div>
                <div className="homecard">
                    <img src={homecardthreeimg}/>
                    <h3>What you want</h3>
                    <p>With the best equipment</p>
                </div>
                <a href="#">Read more</a>
            </div>
        </div>
    )
}