import React from "react";
import "./styles/priceingtable.css";

export default function Priceingtable(){
    return(
        <div className="priceingTable">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,600,0,200" />
            <div className="colorbox"></div>
            <div className="tableWrap">
                <table>
                    <tr>
                        <th className="mainHero">Compare Memberships</th>
                        <th className="sideHeroOne">Comfort <br/> €24,99</th>
                        <th className="sideHeroTwo">Premium <br /> €29,99</th>
                        <th className="sideHeroThree">All in</th>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Access to number of clubs</td>
                        <td className="mainNumbers">+230</td>
                        <td className="mainNumbers">+1300</td>
                        <td className="mainNumbers">+1300</td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Unlimited use of the Basic-Fit app</td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Take the virtual GXR group lessons anywhere</td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Unlimited access to GXR Live Group Lessons if offered in the club</td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Unlimited use of the massage chairs</td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">50% discount on Yanga Sports Water</td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">€20 NXT Level voucher</td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">A top quality Smart Bike at your home rental 1 year</td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Basic-Fit Home App met 300+ fiets workouts</td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="orangeIcon">close</span></td>
                        <td><span class="material-symbols-outlined" id="greenIcon">done</span></td>
                    </tr>
                    <hr />
                    <tr>
                        <td className="mainText">Registration fee</td>
                        <td>€19,99</td>
                        <td>€0</td>
                        <td>€49,99</td>
                    </tr>
                    <hr />
                </table>
            </div>
            <a href="#">Start now!</a>
        </div>
    )
}