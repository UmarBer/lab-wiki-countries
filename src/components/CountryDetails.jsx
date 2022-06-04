import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

const CountryDetails = (props) => {
  const { id } = useParams();
  const countries = props.countries;

  const country = countries.find((item) => {
    return item.alpha3Code === id;
  });

  return (
    <div>
      <h1>{country.name.official}</h1>
    </div>
  );
};

export default CountryDetails;
// const [country, setCountry] = useState(null);
// useEffect(() => {
//   fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       setCountry(data);
//     });
// }, [id]);
