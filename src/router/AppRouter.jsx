import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Programs from '../pages/Programs';
import News from '../pages/News';
import Contact from '../pages/Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<About />} />
        <Route path="programas" element={<Programs />} />
        <Route path="noticias" element={<News />} />
        <Route path="contacto" element={<Contact />} />
      </Route>
    </Routes>
  );
}
