<<<<<<< HEAD
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
=======
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
	return (
		<>
			<Home />
		</>
	);
>>>>>>> 015ed05e9cabe7730195c742f0a1e49b2f1087f3
}

export default App;
