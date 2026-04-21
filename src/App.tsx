import { Routes, Route } from 'react-router';
import Landing from './pages/Landing';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}
