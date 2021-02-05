import React from 'react';
import { CardContainer, Price } from './styles';
import { FaCheck , FaTimes } from 'react-icons/fa';

export const CardPlan = () => {
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
    </CardContainer>
  );
}
