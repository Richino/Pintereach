import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<>
			<div className="landing-page">
				<h1>ORGANIZE ALL OF YOUR KNOWLEDGE IN ONE PLACE.</h1>
				<Link className="button" to="register">
					Get Started
				</Link>
			</div>
		</>
	);
}
