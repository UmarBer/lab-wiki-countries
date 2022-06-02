import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:id" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
