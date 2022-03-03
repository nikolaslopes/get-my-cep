import { Container, Header, Content } from './styles';
import { useState } from 'react';

import { InputField } from '../../components/InputField';

export function GetCep() {
  fetch('https://viacep.com.br/ws/27949-316/json/')
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
        setDdd(data.ddd);
      }
    });

  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [uf, setUf] = useState('');
  const [location, setLocalion] = useState('');
  const [ddd, setDdd] = useState('');

  return (
    <Container>
      <Header>
        <h1>Get My Cep</h1>
        <InputField
          type="text"
          name="cep"
          placeholder="Digite seu CEP"
          maxLength={10}
          autoComplete="no"
        />
      </Header>

      <Content>
        <InputField placeholder="Rua" disabled={true} value={street} />
        <InputField placeholder="Bairro" disabled={true} value={neighborhood} />
        <InputField placeholder="UF" disabled={true} value={uf} />
        <InputField placeholder="Localidade" disabled={true} value={location} />
        <InputField placeholder="DDD" disabled={true} value={ddd} />
      </Content>
    </Container>
  );
}
