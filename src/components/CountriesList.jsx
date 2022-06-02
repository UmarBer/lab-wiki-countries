import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li key={country.name.official}>
            <Link to={`/country/${country.alpha3Code}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
