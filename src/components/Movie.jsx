import React, { useEffect, useState } from 'react'
import axios from "axios"

const Movie = () => {

const [movieDate, setMovieDate] = useState([])
const [searchName, setSearchName] = useState("")

const handleSearch = async(e) => {

const query = e.target.value

  setSearchName(query)
  // setMovieDate(searchName)

const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=376200bcca0a60fcb1a9a3fdd5e0174c&query=${query}`)
setMovieDate(response.data.results)

}


// useEffect(() => {
//     async function fetchData() {
//     try {
//         const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=376200bcca0a60fcb1a9a3fdd5e0174c&query=superman")
//         setMovieDate(response.data.results)

//         // console.log("movie data is" + movieDate);

//     } catch (error) {
//         console.error(error);
//     }
// }
// fetchData()
// }, [movieDate])


  return (
<>
<div className="search">
    <input type="search" name="search" id="search" onChange={handleSearch} value={searchName} placeholder='Search movies here'/>
</div>

{/* {movieDate.length > 0 
? ( */}

<div className='container'>
      <div className="image">
            {movieDate.map((data) => (
              <>
              <p>{data.title}</p>
              <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="" />
              <p>{data.overview}</p>
              </>
            ))}
      </div>
    </div>
{/* ) :
(
<h1>No movies found</h1>
) }
     */}

    </>
  )
  
}

export default Movie
