import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const movie = movies.find((m) => m.title === movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, releaseDate, posterPath, cast } = movie;

  return (
    <div>
      <h1>{title}</h1>
      <p>Release date: {releaseDate}</p>
      <img src={posterPath} alt={title} />
      <p>Cast: {cast.join(", ")}</p>
    </div>
  );
}

