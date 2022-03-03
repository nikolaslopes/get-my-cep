import styled from 'styled-components';

export const Container = styled.div`
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

    &.extra-width {
      width: 446px;
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.primary.lighter};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
