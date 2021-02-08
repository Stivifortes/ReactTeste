import styled from 'styled-components';

export const AddUserContainer = styled.div`
    margin: 40px;
    padding: 15px;
    width: 300px;
    height: auto;
    border-top: 3px solid #00a7be;
    border-radius: 4px;
    box-shadow: 0 0 10px grey;
    

    h3{
      margin: 20px 20px 25px 20px;
      color: #37517e;
      font-size: 20px;
      text-align: left;
    }
`;


export const DivPrices = styled.div`
    //background: red;
    //border: 1px solid grey;
    margin: 50px auto;
`;


export const ChoosedPlan = styled.div`
    //background: grey;
    color: grey;
    width: 70%;
    margin: 20px auto;
    padding: 5px;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .PlanTitle{
      //color: #FFF;
    }
    .PlanPrice{
      //color: #FdF;
    }
`;

export const ExtraUsers = styled.div`
    width: 70%;
    margin: 20px auto;
    padding: 5px;
    border-bottom: 1px solid grey;
    //border: 1px solid grey;
    //background: blue;
    display: flex;
    justify-content: space-between;

    div {
      //background: green;

      .ExtraUser{
        //background: grey;
        color: green;
        margin-left: 0px;
      }
      .UserNumber{
        text-align:left;
        color: green;
      }
    }

    .UsersPrice{
      //background: yellow;
      display: flex;
      align-items: center;
      color: green;
    }
`;


export const TotalPrice = styled.div`
    padding: 5px;
    color: grey;
    border-bottom: 1px solid grey;
    width: 70%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
`;