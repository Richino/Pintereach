import "./style.scss";
import { Link } from "react-router-dom";

import React, { useState } from "react";

const Cards = (props) => {
	const { title, description, image, id } = props;
	const openArticle = (e) => {
		//props.modalState();
		//props.getId(e.target.id);
	};

	const addFavourtites = (e) => {
		//props.addFavourites(props.data.searchResults[e.target.id]);
	};

	return (
		<>
			<div className="card" id={id}>
				<div className="img" style={{ background: `url(${image})`, backgroundSize: "cover" }}>
					<div className="modal">
						<button id={id} onClick={addFavourtites}>
							Add article
						</button>
						<button id={id} onClick={openArticle}>
							Read more
						</button>
					</div>
				</div>
				<div className="text-container">
					<p className="title">{title}</p>
					<p className="description">{description}</p>
				</div>
			</div>
		</>
	);
};

export default Cards;
