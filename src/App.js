import './App.css';
import NavBar from './component/NavBar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Template from './component/Template';

function App() {
  const [userData, setUserData] = useState([]);
  const [ticketData, setTicketData] = useState([]);

  
  const [filter, setFilter] = useState((localStorage.getItem("filter")) ? JSON.parse(localStorage.getItem("filter")) : {
    groupBy: "priority",
    orderBy:"priority"
  });

  
  
  const fetchData = async () =>{
    try{
      const response = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        
        setUserData(response.data.users);
        setTicketData(response.data.tickets);
        
      }
      catch(err){
        throw(new Error(err));
      }
    }

    useEffect(() =>{
      fetchData();
      if(!localStorage.getItem("filter")){
        localStorage.setItem(
          "filter",
          JSON.stringify(filter)
        );
      }
    }, [filter]);
    
    // console.log(filter)
  

  return (
    <div>
      <NavBar filter={filter} setFilter={setFilter} />

      <Template filter = {filter} userData = {userData} ticketData = {ticketData}></Template>

      {/* <div className="tickets">
        {ticketData.map((ticket) => (
          <Card data={ticket} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
