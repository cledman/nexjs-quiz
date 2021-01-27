import styled from 'styled-components';

const QuizContainer = styled.div`
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;