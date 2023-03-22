import { Link } from 'react-router-dom';
export default function MovieCard(props) {
    const { posterPath, title, releaseDate } = props;

    return (
        <div className="movie-card">
          <Link to={`/movies/${title}`}>
            <div className="movie-card-image" style={{ backgroundImage: `url(${posterPath})` }}></div>
            <div className="movie-card-details">
              <h2 className="movie-card-title">{title}</h2>
              <p className="movie-card-date">{releaseDate}</p>
            </div>
          </Link>
        </div>
      );
    }
