import { Link } from "react-router-dom";


export default function Card({ship,url}){
  const id = url.split('/').filter(Boolean).pop()
 
  return (<>
  
  <div className="card">
    <img src="" alt="" className="card-img" />
    <h1 className="card-name">{ship.name}</h1>
    <p className="card-model">Model:{ship.model}</p>
    <Link  to={`/cardPage/${id}`}><p  className="card-url">{ship.url}</p></Link>
    <p className="card-class">Class:{ship.starship_class}</p>
    </div>
  
  </>)
}