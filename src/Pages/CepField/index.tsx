import { Container, Header, Content } from './styles';
import React, { useState } from 'react';

import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';

export function CepField() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [uf, setUf] = useState('');
  const [location, setLocalion] = useState('');
  const [ddd, setDdd] = useState('');

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
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

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCep(event.target.value);
  }

  function clearStateFields() {
    setCep('');
    setStreet('');
    setNeighborhood('');
    setUf('');
    setLocalion('');
    setDdd('');
  }

  return (
    <Container>
      <Header>
        <h1>Get My Cep</h1>
        <InputField
          type="text"
          name="cep"
          placeholder="Digite seu CEP"
          maxLength={10}
          autoComplete="off"
          value={cep}
          onChange={handleInputChange}
        />
      </Header>

      <Content>
        <InputField placeholder="Rua" disabled={true} value={street} />
        <InputField placeholder="Bairro" disabled={true} value={neighborhood} />
        <InputField placeholder="UF" disabled={true} value={uf} />
        <InputField placeholder="Localidade" disabled={true} value={location} />
        <InputField placeholder="DDD" disabled={true} value={ddd} />

        <Button label="Limpar campos!" onClick={clearStateFields} />
      </Content>
    </Container>
  );
}