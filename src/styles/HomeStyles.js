import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;


export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;


export const Heading1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`
