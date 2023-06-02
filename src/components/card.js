import "./card.css"

import { Link } from "react-router-dom"
const Card = ({ mov }) => {
  return (
    <Link className="card  row box rounded-top border-0 bg-light "to={`/movie/${mov.id}`}>
    
   
    <img src={`https://image.tmdb.org/t/p/w500` + mov.poster_path} className="w-100 h-25 card-img "/>
    
    <div className="card-title text-center text-warning bg-dark w-100 m-1 rounded-bottom">
    Name Movie: {mov.original_title}
    </div>
    </Link>
    
    
    
    
    
    
    
  )
}
//  <div className="box w-50 h-50">
//<img src={logo} className="w-100 h-100 rounded object-fit-cover" />
//  </div>
export default Card