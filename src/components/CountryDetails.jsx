import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CountryDetails = () => {
  const { id } = useParams();

  const [country, setCountry] = useState(null);
  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, [id]);
  return (
    <div>
      <h1>{country.name.official}</h1>
      {/* <h2>{country.capital[0]}</h2> */}
    </div>
  );
};

export default CountryDetails;
