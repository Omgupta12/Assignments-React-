import React,{useState,useEffect} from 'react'
import "./table.css"

import axios from "axios";


const ShowData = () => {
   const [data, setData] = useState([]);

   const getData = async () => {

      axios({
         method : "get",
         url: "http://localhost:8080/data"
      })
      .then(r => setData(r.data)) 

   };

   const handledelete = (id) => {
      console.log(id);
      axios({
         method : "Delete",
         url: "http://localhost:8080/data/"+id
      })
      .then(r => getData()) 
   }

   useEffect(() => {
      getData();
   }, [setData]);

   return (
      <div className="tableDiv">
         <h1>Employees</h1>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Martial Status</th>
                  <th>Delete</th>
               </tr>
            </thead>
            <tbody>
               {data.map((e) => {
                  return (
                     <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.department}</td>
                        <td>{e.salary}</td>
                        <td>{e.status}</td>
                        <td onClick={() => handledelete(e.id)}>Delete</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default ShowData