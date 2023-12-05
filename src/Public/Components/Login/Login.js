import React from "react";
import './login.css';

export default function Login(){
    return (
		<>
			<main className="loginMain">
				<section>
					<div className="wrapper">
						<form>
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
								<button className="login-button">
									Belépés
								</button>
							</div>
						</form>

						<p className="text-sm text-white text-center">
							Nincs fiókod? <a href="/registration">Regisztrálok</a>
						</p>
					</div>
				</section>
			</main>
		</>
	);
}