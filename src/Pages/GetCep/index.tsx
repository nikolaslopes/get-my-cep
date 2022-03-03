import { Container, Header, Content } from './styles';
import { useState } from 'react';

import { InputField } from '../../components/InputField';

export function GetCep() {
  fetch('https://viacep.com.br/ws/69097360/json/')
    .then((response) => {
      if (response.status !== 200) {
        console.log('erro ao buscar cep');
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data.erro) {
        console.log('cep não encontrado');
      } else {
        setStreet(data.logradouro);
        setNeighborhood(data.bairro);
        setUf(data.uf);
        setLocalion(data.localidade);
      }
    });

  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [uf, setUf] = useState('');
  const [location, setLocalion] = useState('');

  return (
    <Container>
      <Header>
        <h1>My Cep</h1>
      </Header>

      <Content>
        <input
          type="text"
          name="cep"
          placeholder="Digite seu CEP"
          maxLength={10}
        />

        <InputField placeholder="Rua" disabled={true} value={street} />

        <InputField placeholder="Bairro" disabled={true} value={neighborhood} />

        <InputField placeholder="UF" disabled={true} value={uf} />

        <InputField placeholder="Localidade" disabled={true} value={location} />
      </Content>
    </Container>
  );
}
