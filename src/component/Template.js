import React from 'react'
import {statusTitles, priorityTitles} from '../constants';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";


import Card from './Card';
import "./Template.css"

const Template = ({filter, userData, ticketData}) => {
    

    filter.orderBy === "priority" ?(
            ticketData.sort((a,b)=> (b.priority - a.priority ))
    ):(ticketData.sort((a,b)=> (a.title > b.title ? 1 : -1)))

    
  return (
      <div className="uiByGroup">
        {filter.groupBy === "status" &&
          statusTitles.map((title) => (
            <div className="ui-column">
              <div className="group-head">
                <div className="group-left">
                  <img src={title.icon} alt="" width={"20px"} height={"20px"} />
                  <div>{title.title}</div>
                  <span className="ticket-len">
                    {
                      ticketData.filter((item) => item.status === title.title)
                        .length
                    }
                  </span>
                </div>
                <div className="group-right">
                  <IoAddOutline />
                  <HiDotsHorizontal />
                </div>
              </div>
              <div>
                {ticketData
                  .filter((item) => item.status === title.title)
                  .map((item) => (
                    <Card data={item} />
                    // <div>hello</div>
                  ))}
              </div>
            </div>
          ))}

        {filter.groupBy === "priority" &&
          priorityTitles.map((title, index) => (
            <div className="ui-column">
              <div className="group-head">
                <div className="group-left">
                  <span>{title.icon}</span>
                  <span>{title.title}</span>
                  <span className="ticket-len">
                    {
                      ticketData.filter((item) => item.priority === index)
                        .length
                    }
                  </span>
                </div>
                <div className="group-right">
                  <IoAddOutline />
                  <HiDotsHorizontal />
                </div>
              </div>
              <div>
                {ticketData
                  .filter((item) => item.priority === index)
                  .map((item) => (
                    <Card data={item} />
                    // <div>hello</div>
                  ))}
              </div>
            </div>
          ))}

        {filter.groupBy === "users" &&
          userData.map((user) => (
            <div className="ui-column">
              <div className="group-head">
                <div className="group-left">
                  <FaUserCircle fill="blue" />

                  <span>{user.name}</span>
                  <span className="ticket-len">
                    {
                      ticketData.filter((item) => item.userId === user.id)
                        .length
                    }
                  </span>
                </div>
                <div className="group-right">
                  <IoAddOutline />
                  <HiDotsHorizontal />
                </div>
              </div>
              <div>
                {ticketData
                  .filter((item) => item.userId === user.id)
                  .map((item) => (
                    <Card data={item} />
                  ))}
              </div>
            </div>
          ))}
      </div>
  );
}

export default Template
