import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 700px;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.colors.primary.light};
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  small {
    display: flex;
    align-self: flex-start;
    font-size: 12px;
    margin-left: 6px;
    margin-top: 10px;
    color: #f63131;
  }

  input {
    width: 465px;
  }
`;

export const Content = styled.div`
  margin-top: 56px;
  padding: 20px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div + div {
    margin-top: 22px;
  }
`;
