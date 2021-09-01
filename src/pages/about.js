import Head from 'next/head'
import { Container, Main, Heading1} from '../styles/HomeStyles';
import TopHeader from '../components/TopHeader/TopHeader';
export default function About() {
  return (
    <Container>
      <Main>
      <TopHeader/>
        <Heading1>
          About Us
          </Heading1>
        </Main>
    </Container>
  )
}
