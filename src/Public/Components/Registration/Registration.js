import React from "react";
import { database } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './registration.css';
import { useNavigate } from "react-router-dom";

export default function Registration(){

	const history = useNavigate()

	const handleSubmit =(e)=>{
		e.preventDefault()
		const email = e.target.email.value
		const password = e.target.password.value

		createUserWithEmailAndPassword(database,email,password).then(data =>{
			console.log(data,"authData")
			history('/login')
		}).catch(err=>{
			alert(err.code)
		})
	}

    return(
            <main className="regMain">
                <section>
                    <div className="wrapper-reg">
                        <div>
                            <h1> Regisztráció </h1>
                            <form onSubmit={(e)=>handleSubmit(e)}>
								<input name="name" type="text" placeholder="Teljes név"/>
                                <input name="email" type="email" placeholder="Email cím"/>
                                <input name="password" type="password" placeholder="Jelszó"/>
                                <button type="submit">Regisztráció</button>
                            </form>
                            <p>
                                Van már fiókod? <a href="/login">Belépek</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        );
}



/*
const Signup = () => {
	return (
		<main className="regMain">
			<section>
				<div className="wrapper-reg">
					<div>
						<h1> Regisztráció </h1>
						<form>
							<div>
								<label htmlFor="name"></label>
								<input
									type="text"
									value={name}
									onChange={handleNameChange}
									required
									placeholder="Teljes név"
								/>
								{errors.nameError && <p className="error">{errors.nameError}</p>}
							</div>

							<div>
								<label htmlFor="email-address"></label>
								<input
									type="email"
									value={email}
									onChange={handleEmailChange}
									required
									placeholder="Email cím"
								/>
								{errors.emailError && <p className="error">{errors.emailError}</p>}
							</div>

							<div>
								<label htmlFor="password"></label>
								<input
									type="password"
									value={password}
									onChange={handlePasswordChange}
									placeholder="Jelszó"
								/>
								{errors.passwordError && (
									<p className="error">{errors.passwordError}</p>
								)}
							</div>

							<button type="submit" onClick={handleSubmit}>
								Regisztráció
							</button>
						</form>

						<p>
							Van már fiókod? <NavLink to="/belepes">Belépek</NavLink>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};
*/