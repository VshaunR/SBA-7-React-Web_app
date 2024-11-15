import { useState,useEffect } from "react";

export default function Search(){
const [searchTerm,setSearchTerm] = useState("");
const [searchCate, setSearchCate]= useState("");
const [searchData,setSearchData]= useState([])
function handleSearchCate(e){
  setSearchCate(e.target.value)
  setSearchData([])
}
console.log(searchCate)
  function handleChange(e){
    setSearchTerm(e.target.value)
    setSearchData([])
  }

 async function handleSubmit(e){
    e.preventDefault()
    try {
      let arr=[]
      
      let url = `https://swapi.dev/api/${searchCate}/?search=${searchTerm}`
      //works, need to have a way to set it from people to starships to vehicles...
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results)
      if(searchData.length >=1){
        arr =[]
       
       }else{
        arr= arr.concat(data.results)
        setSearchData([...searchData,arr])
       }
     
    } catch (e) {
        console.error(e)
    }
    
  }

console.log(searchData)

  return(<div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="search" id="searchTerm" onChange={handleChange}/>
        <select onClick={handleSearchCate} defaultValue={'DEFAULT'}>
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

          <ul>
            {searchData.map((data)=>{
              {data.name}
            })}
          </ul>

  </div>)
}