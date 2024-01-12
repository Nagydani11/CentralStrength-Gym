import React from "react";
import logoimg from '../../../Public/Components/Header/logo.webp';
import { signOut } from "firebase/auth";
import { database } from "../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Myappnav(){
        const history = useNavigate()

        const handleClick = ()=>{
            signOut(database).then(val =>{
                console.log(val,'val')
                history('/')
            })
        }
        return (
            <>
                <div className="navbar">
                    <div className="logo">
                        <a href="/"><img src={logoimg} /></a>
                    </div>
                    <ul className="links">
                        <li>
                            <a href="/myapp/">Overview</a>
                        </li>
                        <li>
                            <a href="/myapp/allin">Allin</a>
                        </li>
                        <li>
                            <a href="/myapp/membership">Membership</a>
                        </li>
                        <li>
                            <a href="/myapp/payments">Payments</a>
                        </li>
                        <li>
                            <a href="/myapp/myinformation">My information</a>
                        </li>
                        <li>
                            <a href="/myapp/visits">Visits</a>
                        </li>
                        <button onClick={handleClick}>SignOut</button>
                    </ul>
                </div>
            </>
        );
    }
