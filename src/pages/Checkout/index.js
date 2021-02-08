import React from 'react';
import { Layout } from '../../components/Layout';
import CardAddUser from '../../components/CardAddUser';
import  CardPlan  from '../../components/CardPlan';
import { CheckoutContainer, H1 } from './styles';

export const Checkout = () => {
  return (
    <Layout>
      <H1>Checkout Page ...</H1>
      <CheckoutContainer>
          <CardPlan showButton={false} />
        <CardAddUser/>
      </CheckoutContainer>
    </Layout>
  );
}
