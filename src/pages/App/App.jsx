import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import NavBar from '../../components/NavBar';
import ActorListPage from '../ActorListPage/ActorListPage';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { movies } from '../../data.js';
import ActorDetailPage from '../ActorDetailPage/ActorDetailPage';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  // Redirect unauthenticated users to the login pag

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage movies={movies} />} />
            <Route path="/actors/:actorName" element={<ActorDetailPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      )}
    </main>
  );
}
