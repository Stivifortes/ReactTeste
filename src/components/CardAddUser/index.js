import React, {useState} from 'react';
import Form from '../Form'
import { 
  AddUserContainer, 
  DivPrices, 
  ChoosedPlan, 
  ExtraUsers,
  Button,
  TotalPrice
} from './styles';

const CardAddUser = ({planPrice}) => {

  const [number, setNumber] = useState (null);

  const getNumber = (e, number) =>{
    e.preventDefault();
    setNumber(number)
  }

  const handleCheckout = () =>{
    alert("Proceeding  to Checkout!")
  }

  return (
    <AddUserContainer>
      <h3>Your Cart</h3>
      <DivPrices>
        <ChoosedPlan>
          <p className="PlanTitle">Standard Plan</p>
          <p className="PlanPrice">${planPrice}</p>
        </ChoosedPlan>
        <div>
          <ExtraUsers>
            <div>
              <div className="ExtraUser">Extra Users</div>
              <div className="UserNumber">{`${number === null ? 0 : number} Users`}</div>
            </div>
            <div className="UsersPrice">{number === null ? 0 : number * 10}</div>
          </ExtraUsers>
        </div>
        <TotalPrice>Total(USD) <span>{number === null ? 0 : (number * 10) + planPrice }</span></TotalPrice>
        <Form numberAddedFunc={getNumber}/>
        <Button onClick={handleCheckout}>Checkout</Button>
      </DivPrices>
    </AddUserContainer>
  );
}

export default CardAddUser;