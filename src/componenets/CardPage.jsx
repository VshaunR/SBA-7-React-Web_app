import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import battleShips from "../Utilities/battleShips.mjs";
export default function CardPage(){
 
  const {id} = useParams()
 console.log(id)
 const [ship,setShip]=useState({})
  async function renderPage(){

    try {
      let baseURL =`https://swapi.dev/api/starships/${id}`
      const response = await fetch(`${baseURL}`)
      const data = await  response.json();
      
      setShip(data)
      console.log(ship)
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
console.log(renderImage())
    useEffect(()=>{
      renderPage()
    },[])
  return(<div className="card-page">
     
  <div className="card-profile">
   
  <img src={src} alt="" className="card-page-img"/>
      <ul className="card-page-description">
    <li>{ship.name}</li>
    <li>{ship.model}</li>
    <li>{ship.manufacturer}</li>
    <li>{ship.length}</li>
    <li>{ship.cargo_capacity}</li>
    <li>{ship.passengers}</li>
    <li>{ship.crew}</li>
    <li>{ship.created}</li>
      </ul>

  </div>
  </div>)
}