import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
export default function Home() {
  return (
    <Container>
      <Main>
        <TopHeader/>
        <Heading1>
          Home Page
          </Heading1>
        </Main>
    </Container>
  )
}
