import React from "react";
import logoimg from '../../../Public/Components/Header/logo.webp'

export default function Myappnav(){
        return (
            <>
                <div className="navbar">
                    <div className="logo">
                        <a href="/"><img src={logoimg} /></a>
                    </div>
                    <ul className="links">
                        <li>
                            <a href="/myapp/overview">Overview</a>
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
                        <li>
                            <a href="/">Kilépés szimuláció</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
