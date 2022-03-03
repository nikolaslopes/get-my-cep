import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { CepField } from '../Pages/CepField';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/getcep" element={<CepField />} />
    </RoutesWrapper>
  );
}
