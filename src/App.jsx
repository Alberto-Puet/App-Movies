import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { Welcome } from "./pages/Welcome";

export function App() {
  return (
    <Router>
      <header>
        
        <Link to="/"><h1 className={styles.title}>My Movie's</h1></Link>

      </header>
      <main>
        <Routes>
          <Route exact  path="/movie/:movieId" element={<MovieDetails/>}></Route>
          <Route  path="/" element={<Welcome/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
