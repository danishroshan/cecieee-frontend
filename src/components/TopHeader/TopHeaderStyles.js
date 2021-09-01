import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary1};
  display: flex;
  flex-direction: row;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    align-items: center;
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  line-height: 32px;
  color: white;
  transition: 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;