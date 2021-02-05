import styled from 'styled-components';

export const CardContainer = styled.div`
    margin: 40px;
    padding: 15px;
    width: 300px;
    height: 450px;
    border-top: 3px solid #00a7be;
    border-radius: 4px;
    box-shadow: 0 0 10px grey;
    :hover {
      margin-top: 15px;
    }

    h1 {
      margin: 20px 20px 25px 20px;
      color: darkblue;
      font-size: 20px;
      text-align: left;
    }
    ul {
      margin: 40px 20px;

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
`;

export const Price = styled.div`
    margin-right: 140px;
    
    #price {
      font-size: 40px;
      align-items:left;
      color: darkblue;

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