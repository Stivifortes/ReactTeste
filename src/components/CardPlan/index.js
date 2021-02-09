import React from 'react';
import { useHistory } from 'react-router-dom'
import { CardContainer, Price } from './styles';
import { FaCheck , FaTimes } from 'react-icons/fa';

const CardPlan = ({ showButton, planId, planPrice, planTitle, planDescription }) => {
  
  //Hook React Router - Passar o history para component filho
  const history = useHistory()
  
  const handleGetPlanButton = () =>{
    history.push(`/checkout/${planId}`);
  }

  const physicallySeparated = planDescription.isPhysicallySeparated ? 
    (<li><FaCheck className="checkIcon"/>Physical Separation</li>) :
    (<li><FaTimes className="timesIcon"/><del>Physical Separation</del></li>);
  
  const projects = planDescription.projects > 1 ? 
    (`${planDescription.projects} Projects`) :
    (`${planDescription.projects} Project`)

  return (
    <CardContainer>
      <h1>{planTitle}</h1>
      <Price>
        <p id="price"><sup>$</sup>{planPrice}</p>
        <p id="perMonth">per month</p>
      </Price>
      <ul>
        <li><FaCheck className="checkIcon" />Up to {planDescription.users} Users</li>
        <li><FaCheck className="checkIcon"/>{projects}</li>
        <li><FaCheck className="checkIcon"/>{planDescription.files} Files</li>
        {physicallySeparated}
      </ul>
      { showButton && <button onClick={handleGetPlanButton}>Get Plan</button>}
    </CardContainer>
  );
}

export default CardPlan;