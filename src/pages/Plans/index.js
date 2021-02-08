import React from 'react';
import { Layout } from '../../components/Layout';
import CardPlan from '../../components/CardPlan';
import { BodyContainer, H1, HR, HRcolored, CardSection } from './styles';

export const Plans = () => {
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
          <CardPlan showButton/>
          <CardPlan showButton/>
          <CardPlan showButton/>
        </CardSection>
      </BodyContainer>
    </Layout>
  );
}
