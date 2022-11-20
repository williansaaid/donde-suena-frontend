import { Route, Routes, BrowserRouter } from "react-router-dom";

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx";
import UserForm from "./Components/UserForm/UserForm";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import EventCreation from "./Components/EventForm/EventForm";
import PostVar from "./Components/PostVar/PostVar";
import UserFavorites from "./Components/UserFavorites/UserFavorites";
import MyShopping from "./Components/MyShopping/MyShopping";
import Confirm from "./Components/Confirm/Confirm";

function App() {
    return (
        <BrowserRouter>
            <div className="App w-full h-full">
                <Navbar />
                <Login />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route
                        exact
                        path={"/register/artist"}
                        element={<ArtistForm />}
                    />
                    <Route
                        exact
                        path={"/register/user"}
                        element={<UserForm />}
                    />
                    <Route
                        exact
                        path={"/create/event"}
                        element={<EventCreation />}
                    />
                    <Route path={"/details/:id"} element={<EventDetail />} />
                    <Route path={"/confirm/:token"} element={<Confirm />} />
                    <Route path={"/postVar"} element={<PostVar />} />
                    <Route path="/favs" element={<UserFavorites />}/>
                    <Route path={"/myshopping/:id"} element={<MyShopping />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
