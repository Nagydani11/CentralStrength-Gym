import React from "react";
import overviewimageone from './image/overview1.jpg';
import overviewimagetwo from './image/overview2.jpg';

export default function Overviewcard(){
    return(
        <div className="overviewcardwrap">
            <div className="overviewcard">
                <img src={overviewimageone}/>
                <h5>GXR</h5>
                <p>Virtual group lessons for gym and at home</p>
            </div>
            <div className="overviewcard">
            <img src={overviewimagetwo}/>
                <h5>Advantages</h5>
                <p>Extra advantages for Basic fit members</p>
            </div>
        </div>
    )
}