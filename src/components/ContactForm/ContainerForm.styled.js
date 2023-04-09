import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;

  & Button {
    width: 100px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px auto 15px 15px;
  & div {
    display: flex;
    flex-direction: column;

    & input {
      width: 150px;
    }
  }
`;
