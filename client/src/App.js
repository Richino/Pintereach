import StarterPage from "./components/starterPage/starterPage";
import Dashboard from "./components/dashboard/dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./App.scss";

const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {
	return (
		<div className="App">
			<Router>
				<Provider store={store}>
					<Dashboard />
				</Provider>
			</Router>
		</div>
	);
}

export default App;
