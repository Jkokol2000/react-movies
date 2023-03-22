import { movies } from "../../data.js";
import './ActorListPage.css'
import ActorCard from "../../components/ActorCard";

const actors = new Set();
movies.forEach(movie => {
    movie.cast.forEach(actor => {
        actors.add(actor);
    })
})

export default function ActorListPage(){
    return (
        <div className="ActorListPage">
            <h1>Actors</h1>
            <div className="actor-grid">
                {[...actors].map((actor) => (
                    <ActorCard key={actor} name={actor} />
                ))}
            </div>
        </div>
    );
}
