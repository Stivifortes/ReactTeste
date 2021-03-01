import React from 'react';
import {Layout} from '../../components/Layout';
import tenant from '../../img/CreateTenant.png'
import { H1, DIV } from './styles';

function Tenant() {
  return (
    <Layout>
      <H1>Create Tenant</H1>
      <DIV>
        <img src={tenant} alt="Create A tenant"/>
      </DIV>
    </Layout>
  );
}

export default Tenant;