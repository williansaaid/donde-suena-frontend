import { Route, Routes } from "react-router-dom";
import ArtistForm from "./Components/ArtistForm/ArtistForm";
import { Provider } from "react-redux"
import store from "./Redux"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route exact path={'/login/artista'} element={<ArtistForm/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
