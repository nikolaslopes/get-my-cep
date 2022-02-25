import { Container } from './styles';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate('/getcep');
  }

  return (
    <Container>
      <Button label="Click me" onClick={handleButtonClick}/>
    </Container>
  );
}