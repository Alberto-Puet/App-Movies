/* eslint-disable no-unreachable */
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect, useState } from "react";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          placeholder="Search Movies"
          aria-label="Search Movies"
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            history("/?search=" + value);

          }}
        />
          <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
