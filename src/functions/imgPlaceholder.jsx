import placeholder from "../placeholder.jpeg";


export function imgPlaceholder(path) {
  return path
    ? "https://image.tmdb.org/t/p/w300" + path
    : placeholder;
}
