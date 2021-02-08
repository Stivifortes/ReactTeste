import React, {useState} from 'react';
import { FormContainer } from './styles';

const Form = ({numberAddedFunc}) => {

  const [numberAdded, setNumberAdded] = useState(1);

  const getNumberAdded = (e) =>{
    setNumberAdded(e.currentTarget.value < 0 ? 0 : e.currentTarget.value);
  }


  return (
    <FormContainer>
      <form onSubmit={(e) => numberAddedFunc(e, numberAdded)}>
        <input type="number" placeholder="More users" onInput={getNumberAdded} min={0}/>
        <button type="submit">Add</button>
      </form>
    </FormContainer>
  );
}

export default Form;