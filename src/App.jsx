import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
