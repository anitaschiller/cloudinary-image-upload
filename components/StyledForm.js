import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: lightblue;
  padding: 1rem;

  label,
  legend {
    font-size: 1.2rem;
  }

  fieldset {
    border: 0;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  select,
  input,
  button {
    border-radius: 5px;
    border: 1px solid #cccccc;
  }

  span {
    color: red;
  }
`;
