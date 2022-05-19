import { useState } from "react";
import Card from "../Card";
import { Car } from "./style";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'


type Props = {
  movies?: IC[];
};

type IC = { title: string; poster_path: string };


export default function MoviesArticle({ movies }: Props) {
  const [group, setGroup] = useState<number>(0);

  const handleRight = () => {
    if (group < 3) {
      setGroup((group) => group + 1);
      console.log("right");
    }
  };
  const handleLeft = () => {
    console.log("left", group);
    if (group !== 0) {
      setGroup((group) => group - 1);
    }
  };

  return (
    <div>
      <Car group={group}>
        <div className="btn btn-left" onClick={handleLeft}>
          <FaCaretLeft/>
        </div>
        <div className="list-container">
          <div className="list">
            {movies?.map((movie, idx) => {
              return (
                <Card
                  poster_path={movie.poster_path}
                  title={movie.title}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
        <div className="btn btn-right" onClick={handleRight}>
          <FaCaretRight/>
        </div>
      </Car>
    </div>
  );
}

