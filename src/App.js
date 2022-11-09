import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./Redux"

//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route exact path={'/login/artista'} element={<ArtistForm/>}/>
          <Route path={"/"} element={<Home/>}/>
          <Route exact path={'/details/:id'} element={<EventDetail/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;