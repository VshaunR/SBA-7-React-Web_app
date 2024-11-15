import { useState, useEffect , useRef} from "react";
import imperial from '/audio/lowAudio-ImperialMarch-longer.mp4'
import Card from '../componenets/Card';



export default function Home(){
  const [ships,setShips]= useState([]);
  //to show user loading data instead of blank screen
  const [loading,setLoading]= useState(false);
  //useRef for current audio
  const imperialAudio= useRef(null)

  //play audio function
  function playAudio(){
    if(imperialAudio.current){
      imperialAudio.current.play()
    }else{
      new Audio(imperial).play()
    }
  }

  //getting all the ships
  async function getShips(){
  try {
    setLoading(true)
    let arr=[];
    let url = `https://swapi.dev/api/starships/`;
  
      const response = await fetch(url);
      const data = await response.json()
      arr= arr.concat(data.results)
  
       setShips(arr)
       setLoading(false);
  // console.log(arr)
  } catch (e) {
    console.error(e)
  }
  
  }
  //mapping through them and sending to Card component
  let list = ships.map((ship)=>{
  
    return <Card key={ship.name} ship={ship} url={ship.url} />
  })
  
  //use effect for initial audio and getting data
  useEffect(()=>{
    playAudio()
   
   getShips()
  },[])
    return (
      <div className="home">
        <audio ref={imperialAudio} src="/audio/lowAudio-ImperialMarch-longer.mp4" > </audio>
        {loading? (<p className="loading">Loading the data</p>):((<>{list}</>))}
 
      </div>
    )
}