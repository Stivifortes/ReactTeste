import React from 'react';
import { CardPlan } from '../CardPlan';
import { BodyContainer, H1, HR, HRcolored, CardSection } from './styles';

export const Body = () => {
  return (
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
        <CardPlan/>
        <CardPlan/>
        <CardPlan/>
      </CardSection>
    </BodyContainer>
  );
}
