import React from 'react'
import { FaUserTie } from "react-icons/fa6";
import { BiSolidMessageAltError } from "react-icons/bi";
import './Card.css';

const Card = (props) => {
    // console.log(props);
    const { id, title, tag } = props.data;
    // console.log(props);
  return (
    <div className="card">
      <div className="card-heading">
        <span className="card-id">{id}</span>
        <FaUserTie fill="#6B6F76" />
      </div>

      <div>
        <p className="card-title">{title}</p>
      </div>

      <div className="tag">
        <div className="tag-icon">
          <BiSolidMessageAltError />
        </div>
        <div className="feature ">
          <div className="circle"></div>
          <span className="feature-req">{tag[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default Card
