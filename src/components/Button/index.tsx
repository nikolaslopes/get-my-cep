import { ContainerButton } from './styles';
import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
}

export function Button({ label, ...rest }: IButton) {
  return (
    <ContainerButton>
      <button type="button" {...rest}>{label}</button>
    </ContainerButton>
  );
}