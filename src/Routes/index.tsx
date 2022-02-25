import { Routes as RoutesWrapper, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { GetCep } from '../Pages/GetCep';

export function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
      <Route path="/getcep" element={<GetCep />} />
    </RoutesWrapper>
  );
}