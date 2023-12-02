import React from "react";
import groupimage from './images/gl1.jpg'

export default function GroupHero(){
    return(
        <div className="groupHero">
            <img src={groupimage} />
            <h1>Group lessons gxr</h1>
            <p>Ready to become the fittest version of yourself? We have everything you need to make fitness your basics. With more than 4000 hours of group lessons per week, there is always something for you. Go For It! </p>
        </div>
    )
}