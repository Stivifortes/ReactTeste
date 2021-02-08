import React from 'react';
import {useHistory} from 'react-router-dom'
import { CardContainer, Price } from './styles';
import { FaCheck , FaTimes } from 'react-icons/fa';

const CardPlan = ({showButton}) => {
  //Hook React Router
  const history = useHistory()
  
  const handleGetPlanButton = () =>{
    history.push('/checkout');
  }

  return (
    <CardContainer>
      <h1>Choosen Plan</h1>
      <Price>
        <p id="price"><sup>$</sup>29</p>
        <p id="perMonth">per month</p>
      </Price>
      <ul>
        <li><FaCheck className="checkIcon" />100 Users</li>
        <li><FaCheck className="checkIcon"/>Possibility to add more users</li>
        <li><FaCheck className="checkIcon"/>Up to 20 Projects</li>
        <li><FaCheck className="checkIcon"/>Up to 1.000.000 Files</li>
        <li><FaTimes className="timesIcon"/><del>Physical Separation</del></li>
      </ul>
      { showButton && <button onClick={handleGetPlanButton}>Get Plan</button>}
    </CardContainer>
  );
}

export default CardPlan;