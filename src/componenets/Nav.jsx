import { Link } from "react-router-dom";

export default function Nav(){


  return(<div className="header">
    <Link to='/'>Home</Link>
    <Link to='/search'>Search</Link>
 
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </div>)
}