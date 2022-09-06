import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { imgPlaceholder } from "../functions/imgPlaceholder";

export function MovieCard({ movie }) {
  
  const imgURL = imgPlaceholder(movie.poster_path);

  return (
    <li className={styles.card}>
      <Link to={"/movie/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImg}
          src={imgURL}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
