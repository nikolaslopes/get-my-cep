import { Container } from './styles';

import { IInputField } from './types';

export function InputField({ ...rest }: IInputField) {
  return (
    <Container>
      <input type="text" {...rest} />
    </Container>
  );
}
