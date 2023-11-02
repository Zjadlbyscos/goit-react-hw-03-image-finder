import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderText = styled.div`
  margin-top: 16px;
  font-size: 18px;
  color: #007bff;
`;

export const Loader = () => {


  return (
    <LoaderContainer>
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};
