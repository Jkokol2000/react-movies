import { Link } from 'react-router-dom';

const imgId = Math.floor(Math.random()* 1000)
const imgUrl = `https://picsum.photos/id/${imgId}/200/300`

export default function ActorCard(props) {
    const { name = "" } = props;
    return (
        <div style={{ backgroundImage: `url(${imgUrl})`}} className="actor-card" >
            <Link to={`/actors/${name}`}>
                <div className="actor-name">{name}</div>
            </Link>
        </div>
    );
}