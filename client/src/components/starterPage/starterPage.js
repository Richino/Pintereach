import "./style.scss";
import LandingPage from "./components/LandingPage/landingpage";
import Login from "./components/LoginPage/loginPage";
import Register from "./components/RegisterPage/registerPage";
import Verification from "./components/VerificationPage/verificationPage";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import ProtectedRoute from "../../ProtectedRoute";

export default function StarterPage() {
	return (
		<>
			<div id="starter-page">
				<div className="top">
					<div className="top-container">
						<Link className="title" to="/">
							PINTEREACH
						</Link>
						<div className="buttons">
							<Link className="text" to="login">
								Login
							</Link>
							<Link className="text" to="register">
								Sign up
							</Link>
						</div>
					</div>
				</div>
				<div className="bottom">
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<ProtectedRoute path="/verification" component={Verification} auth={true} />
					</Switch>
				</div>
			</div>
		</>
	);
}
