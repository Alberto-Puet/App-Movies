import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "../functions/fetch";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function MoviesGrid() {
  // let movies = [];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setpage] = useState(1);

  const [hasMore, sethasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((pagePrev) => pagePrev.concat(data.results));
      sethasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if(!isLoading && movies.length === 0){
    return <Empty/>
  }


  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setpage((page) => page + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.grid}>
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </InfiniteScroll>
  );
}
