import { Route, Routes, BrowserRouter } from "react-router-dom";

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx";
import UserForm from "./Components/UserForm/UserForm";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import EventCreation from "./Components/EventForm/EventForm";
function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route exact path={"/register/artist"} element={<ArtistForm />} />
					<Route exact path={"/login/user"} element={<UserForm />} />
                    <Route exact path={"/create/event"} element={<EventCreation />} />
					<Route path={"/"} element={<Home />} />
					<Route path={"/details/:id"} element={<EventDetail />} />
				</Routes>
                <Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
