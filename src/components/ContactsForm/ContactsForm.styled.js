import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-bottom: 32px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormInput = styled.input`
  margin-top: 3px;
  width: 200px;
`;

export const FormButton = styled.button`
  width: 100px;
  background-color: aliceblue;
  border: none;

  height: 30px;
  border-radius: 7px;
  margin-top: 10px;

  :hover {
    background-color: antiquewhite;
  }
`;
