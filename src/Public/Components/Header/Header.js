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
					<li>
						<a href="/registration">Registration</a>
					</li>
				</ul>
			</div>
		</>
	);
}

