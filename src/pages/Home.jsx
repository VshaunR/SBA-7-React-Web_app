import { useState, useEffect } from "react";
import Card from '../componenets/Card';
export default function Home(){
  const [ships,setShips]= useState([])

  async function getShips(){
  try {
    let arr=[];
    let url = `https://swapi.dev/api/starships/`;
  
      const response = await fetch(url);
      const data = await response.json()
      arr= arr.concat(data.results)
  
       setShips(arr)
  // console.log(arr)
  } catch (e) {
    console.error(e)
  }
  
  }
  
  let list = ships.map((ship)=>{
  
    return <Card key={ship.name} ship={ship} url={ship.url} />
  })
  
  useEffect(()=>{
    getShips()
  },[])
    return (
      <div className="home">
     
      {<>{list}</>}
      </div>
    )
}