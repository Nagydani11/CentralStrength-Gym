import React from "react";
import "./styles/priceingtable.css";

export default function Priceingtable(){
    return(
        <div className="priceingTable">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <table>
                <tr>
                    <th>Compare Memberships</th>
                    <th>Comfort</th>
                    <th>Premium</th>
                    <th>All in</th>
                </tr>
                <hr />
                <tr>
                    <td>Access to number of clubs</td>
                    <td>+230</td>
                    <td>+1300</td>
                    <td>+1300</td>
                </tr>
                <hr />
                <tr>
                    <td>Unlimited use of the Basic-Fit app</td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>Take the virtual GXR group lessons anywhere</td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>Unlimited access to GXR Live Group Lessons if offered in the club</td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>Unlimited use of the massage chairs</td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>50% discount on Yanga Sports Water</td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>€20 NXT Level voucher</td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>A top quality Smart Bike at your home rental 1 year</td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>Basic-Fit Home App met 300+ fiets workouts</td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">close</span></td>
                    <td><span class="material-symbols-outlined">done</span></td>
                </tr>
                <hr />
                <tr>
                    <td>Registration fee</td>
                    <td>€19,99</td>
                    <td>€0</td>
                    <td>€49,99</td>
                </tr>
                <hr />
            </table>
            <a href="#">Start now!</a>
        </div>
    )
}