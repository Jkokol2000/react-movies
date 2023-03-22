import './MoviesListPage.css'
import { movies } from "../../data.js";
import MovieCard from "../../components/MovieCard";

export default function MoviesListPage(){
    return (
        <div >
            <h1>Movie List</h1>
            <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.title}>
                    <MovieCard
                        title={movie.title} 
                        releaseDate={movie.releaseDate} 
                        posterPath={movie.posterPath} 
                    />
                    
                </div>
            ))}
        </div>
        </div>
    );
}
