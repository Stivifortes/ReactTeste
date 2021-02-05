import React from 'react';
import { BodyContainer, H1, HR, HRcolored } from '../../Body/styles';
import { CardPlan } from '../../CardPlan';
import { CardSectionUser } from './styles';

export const AddUsers = () => {
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
      <CardSectionUser>
        <CardPlan/>
      </CardSectionUser>
    </BodyContainer>
  );
}