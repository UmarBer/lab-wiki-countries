import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import 'bootstrap/dist/css/bootstrap.css';
import countries from './countries.json';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col"></div>
        </div>
        <Routes>
          <Route path="/" element={<CountriesList countries={countries} />} />
          <Route
            path="/:id"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
