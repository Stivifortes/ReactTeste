import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 40px;
    padding: 15px;
    width: 300px;
    height: auto;
    border-top: 3px solid #00a7be;
    border-radius: 4px;
    box-shadow: 0 0 10px grey;
    :hover {
      margin-top: 10px;
    }

    h1 {
      margin: 20px 20px 25px 20px;
      color: #37517e;
      font-size: 20px;
      text-align: left;
    }
    ul {
      margin: 40px 10px;

      li {
        text-align: left;
        font-size: 16px;
        color: grey;
        list-style-type: none;
        display: flex;
        align-items: center;
        line-height: 40px;

        .checkIcon {
          margin-right: 10px;
          color: green;
        }
        .timesIcon {
          margin-right: 10px;
        }
      }
    }
    button {
      background: #11a9ba;
      outline: 0;
      color: #FFF;
      margin-top: 0px;
      margin-bottom: 20px;
      border-radius: 10px;
      font-size: 14px;
      padding: 10px 30px;
      cursor: pointer;    
    }
`;

export const Price = styled.div`
    margin-right: 140px;
    
    #price {
      font-size: 40px;
      align-items:left;
      color: #37517e;

      sup {
        font-size: 20px;
        margin-right:5px;
        align-items:left;
      }
    }

    #perMonth {
      color: #00a7be;
      align-items:left;
    }
`;