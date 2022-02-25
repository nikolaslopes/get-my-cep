import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 700px;
  padding: 20px;
  border: 1px solid blue;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header``;

export const Content = styled.div`
  margin-top: 56px;

  input {
    width: 262px;
    height: 46px;
    outline: 0;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 8px;
    background-color: transparent;
    padding: 16.5px 14px;
    font-size: 18px;
    color: #fefefe;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.lighter}
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;