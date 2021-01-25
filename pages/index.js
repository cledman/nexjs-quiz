import styled, { withTheme } from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
/*
export const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  background-position: center;
  background-size: cover;
  flex:1;
`;
*/

export const QuizContainer = styled.div`
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;
  width: 100%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>titulo 1</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lopema sad0asdoasdosa-=</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>
          <Widget.Content>          
            <p>lopema sad0asdoasdosa-=</p>
          </Widget.Content>  
        </Widget>        
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/cledman"/>
    </QuizBackground>

  );
}
