import { Link } from "react-router-dom";

export default function Nav(){


  return(<div className="header">
    <Link to='/'>Home</Link>
    <Link to='/search'>Search</Link>
 
    
  </div>)
}