import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { get } from "../functions/fetch";
import { imgPlaceholder } from "../functions/imgPlaceholder";
import styles from "./MovieDetails.module.css";

export  function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  

 useEffect(() => {
  setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner/>
  }

  if (!movie) {
    return null;
  }

  const imgURL = imgPlaceholder(movie.poster_path);

  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.column} ${styles.img}`} src={imgURL} alt={movie.title} />

      <div className={styles.column}>
        <p className={styles.title}><strong>Title: </strong>{movie.title}</p>
        <p>
          <strong>Genres: </strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p><strong>Description: </strong>{movie.overview}</p>
      </div>
    </div>
  );
}
