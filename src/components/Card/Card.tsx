import * as style from './Card.style'


type MovieCard = {
    title: string,
    poster_path: string,
}

const Card: React.FC<MovieCard> = ({ title, poster_path }) => {
  return (
    <style.Card>
      <img
        style={{ width: "100%" }}
        src={process.env.REACT_APP_IMG_BASE_URL + poster_path}
        alt={title + 'poster'}
      />
      <p>{title}</p>
    </style.Card>
  );
};

export default Card