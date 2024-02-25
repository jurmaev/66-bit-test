import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './const';
import { EmployeePage, EmployeesPage } from './pages';
import { theme } from './chakraTheme';
import { Header } from './components';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path={AppRoutes.Employees} element={<EmployeesPage />} />
            <Route path={AppRoutes.Employee} element={<EmployeePage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
