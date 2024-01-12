import React from "react";
import './login.css';
import { database } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(){
	const history = useNavigate()

	const handleSubmit = (e) =>{
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value
		
		signInWithEmailAndPassword(database,email,password).then(data =>{
			console.log(data,"authData")
			history('/myapp')
		}).catch(err=>{
			alert(err.code)
		})
	}

    return (
		<>
			<main className="loginMain">
				<section>
					<div className="wrapper">
						<form onSubmit={(e)=>handleSubmit(e)}>
							<div>
								<h1 className="login-h1">Bejelentkezés</h1>
								<label htmlFor="email-address"></label>
								<p>
									<input
										className="login-input"
										id="email-address"
										name="email"
										type="email"
										required
										placeholder="Email cim"
									/>
								</p>
							</div>
							<div>
								<label htmlFor="password"></label>
								<p>
									<input
										className="login-input"
										id="password"
										name="password"
										type="password"
										required
										placeholder="Jelszó"
									/>
								</p>
							</div>
							<div>
								<button className="login-button">Belépés</button>
							</div>
						</form>
						<p className="text-sm text-white text-center"> Nincs fiókod? <a href="/registration">Regisztrálok</a></p>
					</div>
				</section>
			</main>
		</>
	);
}