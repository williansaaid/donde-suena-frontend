import { Route, Routes, BrowserRouter } from "react-router-dom";


//Components Import
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import Home from "./Components/Home/Home";
import EventDetail from "./Components/EventDetail/EventDetail.jsx"

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      
        <Routes>
          <Route exact path={'/login/artista'} element={<ArtistForm/>}/>
          <Route path={"/"} element={<Home/>}/>
          <Route path={'/details/:id'} element={<EventDetail/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;