import React from "react";
import {useState } from "react";
import "./App.css";
import Records from "./records.json";
import Header from "./components/Header";
import Filters from "./components/Filters";



function App() {


      const [page, setPage] = useState(1);


  const selectPg = (selectedPage)=> {
    if(
      selectedPage >= 1 &&
      selectedPage <= Records.length &&
      selectedPage !== page
    )
    setPage(selectedPage);
  }


  return (
    <div>
      <Header />
      <Filters />
     
      
      <div className="App">
        {Records && Records.length > 0 && Records.slice(page * 10 - 10, page * 20).map(record => {
          return(
          <div className="record__single" key={record.id}>
            <img src={record.avatar} alt={record.first_name} />
            <b>{record.id}. </b>
            <strong>{record.first_name} {record.last_name}</strong> <br />
            <h5 style={{margin: '5px', display: 'inline-block', direction: 'left'}}>Email:</h5> {record.email}<br /> 
            <h5 style={{margin: '2px', display: 'inline-block', placeItems: 'start' }}>Gender:</h5> {record.gender}<br />
            
            <h5 style={{margin: '10px', display: 'inline-block', placeItems: 'start'}}>Domain:</h5> {record.domain}<br />
             {record.available}
          </div>
          );
        })}
        
      </div>
{
            Records.length > 0 && <div className="pagination">
            <span className={page > 1 ? "": "pagination__disable"}
             onClick={() => selectPg(page - 1)}> ◀ </span>
            {[...Array(Records.length /100)].map((_, i)=>{
            return <span 
            className={page=== i+1? "pagination__selected": ""}
            onClick={()=> selectPg(i+1)} key={i} > {i+1}</span>;
            })}
            <span
            onClick={() => selectPg(page + 1)}> ▶</span>
          </div>
        }
    </div>
  );
}

export default App;
