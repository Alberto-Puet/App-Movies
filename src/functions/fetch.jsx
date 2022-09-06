const api = "https://api.themoviedb.org/3"

export async function get(url){
   return await fetch(api + url, {
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTcyNzhkZjAwM2MxNzdjZTkxN2E3MmJiZmU1Y2NmZSIsInN1YiI6IjYzMTI5NTUzZTYzNTcxMDA3ZGRmYjlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-vTq-ktvkoTsXX_4Aa5Co5PApvDFaqOIRcEOduLjoqk",
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then(result => result.json())
}