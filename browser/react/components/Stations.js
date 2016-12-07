import React, {Component} from 'react';
import {Link} from 'react-router';

const Stations = (props) => {
  console.log(props);
  let arr = [];
  for (let i of props.stations) {
    arr.push(i);
  }
  return (
    <div>
     <h3>Stations</h3>
     <div className="list-group">
     {
       arr.map(station => {
         return (
           <div className="list-group-item" key={station.name}>
             <Link to={'fill/me/in/later'}>{station.name}</Link>
           </div>
         );
       })
     }
     </div>
   </div>
 );
};

export default Stations;
