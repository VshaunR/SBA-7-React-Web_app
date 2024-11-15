


export default function SearchCard({data,category,term}){


  function render(category){

    switch(category){
      case "people":
        return (<div className="card">
          <h1>{category}</h1>
          <h1 className="card-name"><span className="span"></span>{data.name}</h1>
          <p className="card-model"><span className="span">Date Of Birth: </span>{data.birth_year}</p>
          <p className="card-url"><span className="span">Gender: </span>{data.gender}</p>
          <p  className="card-class"><span className="span">Featured In: </span>{data.films}</p>
          </div>)
        case "starships":
          return   (<div className="card">
            <h1>{category}</h1>
            <h1 className="card-name"><span className="span"></span>{data.name}</h1>
            <p className="card-model"><span className="span">Total-Capacity:</span>{data.cargo_capacity}</p>
            <p className="card-url"><span className="span">Total-Crew:</span>{data.crew}</p>
            <p className="card-class"><span className="span">Made By: </span>{data.manufacturer}</p>
            </div>)
         case "films":
          return  (<div className="card">
            <h1>{category}</h1>
            <h1 className="card-name"><span className="span"></span>{data.title}</h1>
            <p className="card-model"><span className="span">Directed By:</span>{data.director}</p>
            <p className="card-class"><span className="span">Producers:</span>{data.producer}</p>
            <p className="card-url"><span className="span">Opening-Crawl:</span>{data.opening_crawl}</p>
            
            </div>)
           case "planets":
            return  (<div className="card">
              <h1>{category}</h1>
              <h1 className="card-name"><span className="span"></span>{data.name}</h1>
              <p className="card-model"><span className="span">Population:</span>{data.population}</p>
              <p className="card-url"><span className="span">Climate:</span>{data.climate}</p>
              <p className="card-url"><span className="span">Terrain:</span>{data.terrain}</p>
         
              </div>)
          case "vehicles":
            return (<div className="card">
              <h1>{category}</h1>
              <h1 className="card-name"><span className="span"></span>{data.name}</h1>
              <p className="card-model"><span className="span">Total-Capacity:</span>{data.cargo_capacity}</p>
              <p className="card-url"><span className="span">Total-Crew:</span>{data.crew}</p>
              <p className="card-class"><span className="span">Class:</span>{data.vehicle_class}</p>
              </div>)
            default:
              <h1>Loading...</h1>

    }
    

  
       
        
            
  }


  return (<>
  
      {data !==null?(render(category)):(<h1>Loading</h1>)}
  
  </>)
}