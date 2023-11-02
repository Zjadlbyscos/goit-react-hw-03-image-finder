import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007acc;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00558a;
  }
`;

const Button = ({ onClick, isHidden }) => {
  return <StyledButton onClick={onClick}>Load more</StyledButton>;
};

export { Button };