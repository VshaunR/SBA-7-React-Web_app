


export default function SearchCard({data}){

  return (<>
  
  <div className="card">
   
    <h1 className="card-name">{data.name}</h1>
    <p className="card-model"></p>
    <p className="card-url"></p>
    <p className="card-class"></p>
    </div>
  
  </>)
}