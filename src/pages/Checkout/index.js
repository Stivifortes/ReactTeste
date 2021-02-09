import React from 'react';
import { Layout } from '../../components/Layout';
import CardAddUser from '../../components/CardAddUser';
import  CardPlan  from '../../components/CardPlan';
import { CheckoutContainer, H1 } from './styles';
import { useParams } from 'react-router-dom';

export const Checkout = () => {
  
  const { planId } = useParams();

  console.log(planId);

  return (
    <Layout>
      <H1>Checkout Page ...</H1>
      <CheckoutContainer>
          {/*<CardPlan showButton={false} planId={ planId }/>*/}
        <CardAddUser/>
      </CheckoutContainer>
    </Layout>
  );
}
