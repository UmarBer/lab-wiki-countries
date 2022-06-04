import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch('https://ih-countries-api.herokuapp.com/countries')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCountries(data);
  //     });
  // }, []);
  return (
    <div>
      <ul>
        {props.countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
