import React, {useEffect, useState} from 'react';
import { Layout } from '../../components/Layout';
import CardPlan from '../../components/CardPlan';
import { BodyContainer, H1, HR, HRcolored, CardSection } from './styles';
import apiData from '../../services/plans';

export const Plans = () => {
  
  const [plans, setPlans] = useState (null);
  const [isLoading, setIsLoading] = useState (true);
  
  useEffect(()=>{
    setPlans(apiData);
    setIsLoading(false);
  }, [])
  //console.log(plans);
  

  return (
    <Layout>
      <BodyContainer>
        <H1>Choose Your Plan</H1>
        <HR/>
        <HRcolored/>
        <p id="CheckoutDescription">Almost there!
          Just take a look at the plan you have selected and see 
          if you want to add more users to it. After that, proceed 
          to checkout.
        </p>
        <CardSection>
          { isLoading ? 
            'Loading...' : 
            plans.map ((plan, index) => (<CardPlan 
              key={index}
              planId={plan.planId}
              planTitle={plan.planTitle}
              planPrice={plan.planPrice}
              planDescription={plan.planDescription}
              showButton
            />
          
            ))
          }
        </CardSection>
      </BodyContainer>
    </Layout>
  );
}
