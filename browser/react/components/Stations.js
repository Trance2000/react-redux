import React, {Component} from 'react';
import {Link} from 'react-router';

const Stations = (props) => {
  console.log(props);
  let arrOfKeys = Object.keys(props.stations);
  

  return (
    <div>
     <h3>Stations</h3>
     <div className="list-group">
     {
       arrOfKeys.map(station => {
         return (
           <div className="list-group-item" key={station}>
             <Link to={`/stations/${station}`}>{station}</Link>
           </div>
         );
       })
     }
     </div>
   </div>
 );
};

export default Stations;
