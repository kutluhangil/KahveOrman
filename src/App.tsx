import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import CatalogPage from './Pages/CatalogPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
