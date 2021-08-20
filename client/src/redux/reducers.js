import { SEARCH_RESULTS, ID, MODAL_STATE, ADD_FAVOURITES } from "./actions";

export const initialState = {
	searchResults: [],
	favoriteList: [],
	id: null,
	modalOpen: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload,
			};
		case ID:
			return {
				...state,
				id: action.payload,
			};
		case MODAL_STATE:
			return {
				...state,
				modalOpen: state.modalOpen === false ? true : false,
			};
		case ADD_FAVOURITES:
			return {
				...state,
				favoriteList: [...state.favoriteList, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
