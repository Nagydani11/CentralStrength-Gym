import React from "react";
import './registration.css';

export default function Registration(){
    return(
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
                                        placeholder="Teljes név"
                                    />
                                </div>
    
                                <div>
                                    <label htmlFor="email-address"></label>
                                    <input
                                        type="email"
                                        placeholder="Email cím"
                                    />
                                </div>
    
                                <div>
                                    <label htmlFor="password"></label>
                                    <input
                                        type="password"
                                        placeholder="Jelszó"
                                    />
                                </div>
    
                                <button type="submit">
                                    Regisztráció
                                </button>
                            </form>
    
                            <p>
                                Van már fiókod? Belépek
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