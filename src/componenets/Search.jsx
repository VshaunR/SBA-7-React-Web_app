import { useState } from "react";
import SearchCard from "./SearchCard";
export default function Search(){


const [searchTerm,setSearchTerm] = useState("");
const [searchCate, setSearchCate]= useState("");
const [searchData,setSearchData]= useState([])
function handleSearchCate(e){
  setSearchCate(e.target.value)

}

  function handleChange(e){
    setSearchTerm(e.target.value)
   
  }

 async function handleSubmit(e){
    e.preventDefault()
     
    try {
      let arr=[]
      
      let url = `https://swapi.dev/api/${searchCate}/?search=${searchTerm}`
      //works, need to have a way to set it from people to starships to vehicles...
      const response = await fetch(url);
      const data = await response.json();
   
     
        arr= arr.concat(data.results)
        setSearchData(arr)
        let str=""
       setSearchTerm(str)
     
    } catch (e) {
        console.error(e)
    }
   
  }

 let list = searchData.map((data)=>{
    return <SearchCard category={searchCate} data={data}/>
})
 
  return(<div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="searchTerm" value={searchTerm} onChange={handleChange}/>
        <select onChange={handleSearchCate} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled >Choose Category</option>
          <option value="people"  >People</option>
          <option value="films">Films</option>
          <option value="starships">StarShips</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <input type="submit" value="Search" />
      </form>

         {list !==null ? (list):(<h1>loading</h1>)}
             
  </div>)
}