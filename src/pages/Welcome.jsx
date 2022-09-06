import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function Welcome() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 400)

  return (
    <div>
      <Search />

      <MoviesGrid key={debouncedSearch} /> 
    </div>
  );
}
