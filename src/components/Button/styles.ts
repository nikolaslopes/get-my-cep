import styled from 'styled-components';

export const ContainerButton = styled.div`
  button {
    width: 268px;
    height: 56px;

    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
    border: 0;
    border-radius: 8px;

    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.lighter};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
