import React from "react";
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';
import image3 from './images/3.jpeg';
import image4 from './images/4.jpeg';
import './styles/supportinfo.css'


export default function SupportInfo(){
    return(
        <div className="supportInfoBox">
            <h2>Personal trainers</h2>
            <div className="supportWrapper">
                <div className="infoText">
                    <p>Do you have a goal in mind? And do you need help and guidance to achieve that goal? Please contact a Personal Trainer at your club. Use the search bar above to explore their profile and find the best match based on your preferences and goals. They each have their own specialty and way of working and most importantly they are all certified professional trainers.</p>
                </div>
                <div className="infoImage">
                    <img src={image2}/>
                </div>
            </div>
            <h2>Options for accompaniment</h2>
            <div className="supportWrapper">
                <div className="infotext">
                    <p>Do you have a goal in mind? And do you need help and guidance to achieve that goal? Please contact a Personal Trainer at your club. Use the search bar above to explore their profile and find the best match based on your preferences and goals. They each have their own specialty and way of working and most importantly they are all certified professional trainers.</p>
                </div>
                <div className="infoImage">
                    <img src={image2}/>
                </div>
            </div>
            <h2>Physio</h2>
            <div className="supportWrapper">
                <div className="infotext">
                    <p>Do you have a goal in mind? And do you need help and guidance to achieve that goal? Please contact a Personal Trainer at your club. Use the search bar above to explore their profile and find the best match based on your preferences and goals. They each have their own specialty and way of working and most importantly they are all certified professional trainers.</p>
                </div>
                <div className="infoImage">
                    <img src={image3}/>
                </div>
            </div>
            <h2>Products and accessories</h2>
            <div className="supportWrapper">
                <div className="infotext">
                    <p>Do you have a goal in mind? And do you need help and guidance to achieve that goal? Please contact a Personal Trainer at your club. Use the search bar above to explore their profile and find the best match based on your preferences and goals. They each have their own specialty and way of working and most importantly they are all certified professional trainers.</p>
                </div>
                <div className="infoImage">
                    <img src={image4}/>
                </div>
            </div>
        </div>
    )
}