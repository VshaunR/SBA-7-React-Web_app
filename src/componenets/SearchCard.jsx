


export default function SearchCard({data,category}){


  function render(category){

    switch(category){
      case "people":
        return (<div className="card">
          <h1>{category}</h1>
          <h1 className="card-name">{data.name}</h1>
          <p className="card-model"></p>
          <p className="card-url"></p>
          <p className="card-class"></p>
          </div>)
        case "starships":
          return   (<div className="card">
            <h1>{category}</h1>
            <h1 className="card-name">{data.name}</h1>
            <p className="card-model"></p>
            <p className="card-url"></p>
            <p className="card-class"></p>
            </div>)
         case "films":
          return  (<div className="card">
            <h1>{category}</h1>
            <h1 className="card-name">{data.name}</h1>
            <p className="card-model"></p>
            <p className="card-url"></p>
            <p className="card-class"></p>
            </div>)
           case "planets":
            return  (<div className="card">
              <h1>{category}</h1>
              <h1 className="card-name">{data.name}</h1>
              <p className="card-model"></p>
              <p className="card-url"></p>
              <p className="card-class"></p>
              </div>)
          case "vehicles":
            return (<div className="card">
              <h1>{category}</h1>
              <h1 className="card-name">{data.name}</h1>
              <p className="card-model"></p>
              <p className="card-url"></p>
              <p className="card-class"></p>
              </div>)
            default:
              <h1>Loading...</h1>

    }
    

  
       
        
            
  }


  return (<>
  
      {render(category)}
  
  </>)
}