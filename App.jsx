import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Netflix from "./components/pages/Netflix";
import Signup from "./components/pages/Signup";
import Loggedin from "./components/pages/Loggedin";
import Player from "./components/pages/Player";
import TvShows from "./components/pages/TvShows";
import Movies from "./components/pages/Movies";
import UserListedMovies from "./components/pages/UserListedMovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Loggedin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/tv" element={<TvShows />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/new" element={<Player />}></Route>
          <Route path="/myLists" element={<UserListedMovies />}></Route>
          <Route path="/" element={<Netflix />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
