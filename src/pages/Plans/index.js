import React, {useEffect, useState} from 'react';
import { Layout } from '../../components/Layout';
import CardPlan from '../../components/CardPlan';
import { BodyContainer, H1, HR, HRcolored, CardSection } from './styles';
import apiData from '../../plans';

export const Plans = () => {
  
  const [plans, setPlans] = useState (null);

  useEffect(()=>{
    setPlans(apiData);
  }, [])
  //console.log(plans);
  

  return (
    <Layout>
      <BodyContainer>
        <H1>Continue to Checkout</H1>
        <HR/>
        <HRcolored/>
        <p id="CheckoutDescription">Almost there!
          Just take a look at the plan you have selected and see 
          if you want to add more users to it. After that, proceed 
          to checkout.
        </p>
        <CardSection>
          { plans ? plans.map ((plan, index) => (<CardPlan 
              key={index}
              planId={plan.planId}
              planTitle={plan.planTitle}
              planPrice={plan.planPrice}
              planDescription={plan.planDescription}
              showButton
            />
          )) : 'Loading'}
          
          
          {/*<CardPlan showButton planId={1}/>
          <CardPlan showButton planId={2}/>
  <CardPlan showButton planId={3}/>*/}
        </CardSection>
      </BodyContainer>
    </Layout>
  );
}
