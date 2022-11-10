<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux";
=======
import { Route, Routes, BrowserRouter } from "react-router-dom";

>>>>>>> efbd4df028eee14edbb2f151936c190aa7413030

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx";
import UserForm from "./Components/UserForm/UserForm";

function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<Routes>
					<Route exact path={"/login/artista"} element={<ArtistForm />} />
					<Route exact path={"/login/user"} element={<UserForm />} />
					<Route path={"/"} element={<Home />} />
					<Route exact path={"/details/:id"} element={<EventDetail />} />
				</Routes>
			</Provider>
		</div>
	);
}

export default App;
