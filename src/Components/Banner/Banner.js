
import { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../constants/constants'
import axios from '../../Components/constants/axios'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => { 
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
  setMovie(response.data.results[randomIndex]);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="banner">
        <div className="content">
          <h1 className="title">{movie ? movie.original_name : ""}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner