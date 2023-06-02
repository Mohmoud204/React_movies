
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios';

const Page = ({}) => {
  const [page, setPage] = useState([]);
  const pra = useParams()
  const getalldat = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${pra.id}?api_key=9242a6fa52f2ec831514b40f42fe8bd4&language=en-ar`)
   setPage(res.data)
  
  }
  useEffect(() => {
    getalldat()
  }, []);
  return (
    <div className="container">
      <h3 className="m-3 text-primary"> Movie Data  </h3>

      <div className="card mb-3 ">
        {
          page.poster_path ? (<img src={`https://image.tmdb.org/t/p/w500` + page.poster_path} className="w-50 h-50 rounded object-fit-cover" />) : (<h3 className="text-right   error"> name movie :{page.original_title}   </h3>)
        }
        <div className="card-body">
          <h3 className="text-right"> name movie :{page.original_title}   </h3>
          <p className="text-right"> Date: {page.release_date}  </p>
          <p className="text-right"> Evaluation Number:{page.vote_count}  </p>
          <p className="text-right">Evaluation:{page.vote_average}   </p>

        </div>
      </div>
      <div className="card">
        <div className="card-header">
          Film Axis
        </div>
        <div className="card-body">
          <h5 className="card-title">{page.original_title}</h5>
          <p className="card-text">{page.overview}</p>

        </div>
      </div>
      <div className="btn d-flex justify-content-center mt-4">
        <a href={page.homepage}>   <button type="button" class="btn btn-warning ms-3 ">Watching The Movie</button>
        </a>
        <Link to="/">
          <button type="button" class="btn btn-warning w-100 ms-3 d-inline-block">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Page