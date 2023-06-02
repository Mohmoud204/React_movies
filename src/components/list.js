import Card from './card.js';
import "./card.css"
import Next from "./next.js"
const List=({count,getPage,pageconst})=>{
  return (
    <>
    <h3 className="text-center" >All Movies</h3>
    <div className="boxs container ">
    {
      count.length>=0 ? (
      count.map((mov)=>{
        return (<Card mov={mov} Key={mov.id}/>)
      })
      ):<h1> There Are No Movies </h1>
    }
    </div>
    <Next getPage={getPage} pageconst={pageconst}/>
    </>
    )
}
export default List