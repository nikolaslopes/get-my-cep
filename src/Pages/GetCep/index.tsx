import { Container, Header, Content } from './styles';
import { useState } from 'react';

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
        console.log('cep não encontrado')
      } else {
        setStreet(data.logradouro);
        setNeighborhood(data.bairro);
        setUf(data.uf);
        setLocalion(data.localidade);
      }
    })

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
        <input type="text" placeholder="Digite seu CEP" maxLength={10} />
        
        <input type="text" disabled={true} placeholder="Rua" value={street} />
        <input type="text" disabled={true} placeholder="Bairro" value={neighborhood} />
        <input type="text" disabled={true} placeholder="Estado" value={uf} />
        <input type="text" disabled={true} placeholder="Localidade" value={location} />
      </Content>
      
    </Container>
  );
}