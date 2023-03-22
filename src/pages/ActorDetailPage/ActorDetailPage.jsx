import { movies } from "../../data.js";
import { useParams } from 'react-router-dom';
import './ActorDetailPage.css'

export default function ActorDetailPage() {
  const { actorName } = useParams();
  const moviesWithActor = movies.filter(movie =>
    movie.cast.includes(actorName)
  );

  return (
    <div className="ActorDetailPage">
      <h1>{actorName}</h1>
      <h2>Movies:</h2>
      <ul>
        {moviesWithActor.map(movie => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
