export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const ID = "ID";
export const MODAL_STATE = "MODAL_STATE";
export const ADD_FAVOURITES = "ADD_FAVOURITES";

export function getResults(results) {
	return { type: SEARCH_RESULTS, payload: results };
}

export function getId(id) {
	return { type: ID, payload: id };
}

export function modalState(modal) {
	return { type: MODAL_STATE, payload: modal };
}

export function addFavourites(item) {
	return { type: ADD_FAVOURITES, payload: item };
}
