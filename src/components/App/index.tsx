import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';

import { Routes } from '../../Routes';
import { Container } from './styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
