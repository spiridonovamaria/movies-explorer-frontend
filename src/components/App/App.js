import React from "react";
import { Route, Routes } from "react-router-dom"
import Main from '../Main/Main/Main';
import Movies from '../Movies/Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';
import Profile from '../Profile/Profile';
import './App.css';

function App() {

  return (
    <div className="root">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}
export default App;
