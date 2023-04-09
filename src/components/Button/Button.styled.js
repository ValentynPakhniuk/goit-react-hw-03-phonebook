import styled from 'styled-components';

// export const ContainerButton = styled.div`
//   display: flex;
//   gap: 5px;
// `;

export const Button = styled.button`
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  height: 18px;
  text-align: center;
  align-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: blue;
  }
`;
