import React, {useState, useEffect} from 'react';
import { Layout } from '../../components/Layout';
import CardAddUser from '../../components/CardAddUser';
import  CardPlan  from '../../components/CardPlan';
import { CheckoutContainer, H1 } from './styles';
import { useParams } from 'react-router-dom';
import apiData from '../../services/plans';


export const Checkout = () => {
  
  const { planId } = useParams();
  const [plans, setPlans] = useState (null);

  useEffect(()=> {
    const result = apiData.find(plan => {
      return plan.planId === parseInt(planId);
    });
    
    setPlans(result);
  }, [])

  console.log(plans)
  return (
    <Layout>
      <H1>Checkout Page ...</H1>
       <CheckoutContainer>
        {plans !== null ?
        <CardPlan 
        showButton={false} 
        planId = { planId }
        planPrice = {plans.planPrice}
        planTitle = {plans.planTitle}
        planDescription = {plans.planDescription}
        />
        : <h1>No Plan....</h1>
        }
        <CardAddUser planPrice={plans && plans.planId !== 1 && plans.planPrice}/>
      </CheckoutContainer>
    </Layout>
  );
}
