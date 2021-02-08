import styled from 'styled-components';

export const FormContainer = styled.div`
    margin: 30px auto;
    width: 90%;

    form {
      margin-top: 30px;
      display: flex;
      flex-direction: row;
   

      input {
          border: 1 solid #eee;
          padding: 10px 15px;
          border-radius: 4px;
          font-size: 16px;
      }

      button {
        background: grey;
        border: 0;
        padding: 0 15px;
        margin-left: 2px;
        border-radius: 4px;
        color: #FFF;
        font-size:14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
`;