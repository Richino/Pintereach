import "./style.scss";
import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getResults } from "../../redux/actions";
import Cards from "./components/cards";
const API_KEY = "dacb015b5af341c1b91b668bcb0b8a1d";

function Dashboard(props) {
	const [result, setResult] = useState();

	const getResult = (e) => {
		setResult(e.target.value);
	};
	const submit = (e) => {
		if (e.key === "Enter") {
			axios.get(`https://newsapi.org/v2/everything?q=${result}&apiKey=${API_KEY}`).then((res) => props.getResults(res.data.articles));
		}
	};
	return (
		<>
			<div id="dashboard">
				<div className="top">
					<div className="top-container">
						<span className="title">PINTEREACH</span>
						<div className="buttons">
							<span className="text">logout</span>
							<span className="text">articles</span>
							<span className="text">home</span>
							<span className="text">richino</span>
						</div>
					</div>
				</div>
				<div className="bottom">
					<div className="bottom-container">
						<div className="input-container">
							<input type="text" placeholder="search for an article" onChange={getResult} onKeyDown={submit} />
						</div>

						<div className="card-container">
							{props.data.searchResults.map((e, key) => {
								return <Cards key={key} id={key} title={e.title} description={e.description} image={e.urlToImage} />;
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const database = (state) => {
	return {
		data: state,
	};
};

export default connect(database, { getResults })(Dashboard);
