import React from "react";
import logoimage from "../Header/logo.webp";
import "./header.css"

export default function Header() {

	return (
		<>
			<div className="navbar">
				<div className="logo">
                    <a href="/"><img src={logoimage} /></a>
				</div>
				<ul className="links">
					<li>
						<a href="/prices">Prices</a>
					</li>
					<li>
						<a href="/whycentral">Why Central Strength</a>
					</li>
					<li>
						<a href="/support">Support</a>
					</li>
					<li>
						<a href="/grouplessons">Group lessons</a>
					</li>
                    <li>
						<a href="/train">Train everywhere</a>
					</li>
				</ul>
			</div>
		</>
	);
}












/*
export default function Header(){
    return(
        <div className="headerWrap">
            <a href="/">Home</a>
            <a href="/prices">Prices</a>
            <a href="/whycentral">Why Central Strength</a>
            <a href="/support">Support</a>
            <a href="/grouplessons">Group lessons</a>
            <a href="/train">Train everywhere</a>
        </div>
    )
}
*/

/*
export default function Header() {

	return (
		<>
			<div className="headerWrap">
				<div className="logo">
                    <img src={logoimage} href="/home" />
				</div>
				<ul className="links">
					<li>
						<a href="/prices">Prices</a>
					</li>
					<li>
						<a href="/whycentral">Why Central Strength</a>
					</li>
					<li>
						<a href="/support">Support</a>
					</li>
					<li>
						<a href="/grouplessons">Group lessons</a>
					</li>
				</ul>
			</div>
		</>
	);
}

*/