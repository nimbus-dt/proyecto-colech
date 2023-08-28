/* eslint-disable import/no-unresolved */
import '../assets/styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
