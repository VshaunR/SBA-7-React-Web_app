import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import battleShips from "../Utilities/battleShips.mjs";
export default function CardPage(){
 
  const {id} = useParams()
 console.log(id)
 const [ship,setShip]=useState({});
 const [loading,setLoading]= useState(false)
  async function renderPage(){

    try {
      setLoading(true);
      let baseURL =`https://swapi.dev/api/starships/${id}`
      const response = await fetch(`${baseURL}`)
      const data = await  response.json();
    
      setShip(data)
      setLoading(false)
   
    } catch (error) {
      console.log(error)
    }

  }
  let src=''
  function renderImage(){
    let findSRC =battleShips.map((item)=>{
      if(item.name ==ship.name){
        src= item.src
      }
    })
    return src
  }
  renderImage()
  
    useEffect(()=>{
      renderPage()
    },[])
  return(<div className="card-page">
 
    {loading ? (<p className="loading">Loading ....</p>):( <div className="card-profile">
   
   <img src={src} alt="" className="card-page-img"/>
       <ul className="card-page-description">
     <li><span className="span1">Name::</span>{ship.name}</li>
     <li><span className="span1">Model::</span>{ship.model}</li>
     <li><span className="span1">Manufacturer::</span>{ship.manufacturer}</li>
     <li><span className="span1">Length::</span>{ship.length}</li>
     <li><span className="span1">Cargo-Capacity::</span>{ship.cargo_capacity}</li>
     <li><span className="span1">Passengers:</span>{ship.passengers}</li>
     <li><span className="span1">Crew::</span>{ship.crew}</li>

       </ul>
 
   </div>)}

  </div>)
}