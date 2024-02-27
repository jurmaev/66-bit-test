import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppRoutes } from './const';
import { EmployeePage, EmployeesPage, NotFoundPage } from './pages';
import { theme } from './chakraTheme';
import { Header } from './components';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={AppRoutes.Employees} />} />
            <Route path={AppRoutes.Employees} element={<EmployeesPage />} />
            <Route path={AppRoutes.Employee} element={<EmployeePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
