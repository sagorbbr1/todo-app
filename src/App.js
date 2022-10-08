import React, { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';
import Search from './components/Search';


const url = 'https://restcountries.com/v3.1/all';





function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountry, setFilteredCountry] = useState(countries) 


  const DataFetch = async (url) =>{
    setIsLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilteredCountry(data);
    setIsLoading(false);
    setError(null);
  } catch(error) {
    setIsLoading(false);
    setError(error);
  
  }
}


useEffect(() => {
    DataFetch(url);
}, [])

  
const RemoveCountry = (name) => {
  const filter = filteredCountry.filter((country => {
    return country.name.common !== name;
  }))
   setFilteredCountry(filter);
}

 const SearchHandler = (searchValue) => {
  const searchCountry = countries.filter((country) => {
      const CountryName = country.name.common.toLowerCase();
      return CountryName.startsWith(searchValue);
  })
  setFilteredCountry(searchCountry);
 }
  return (
    <div>
 <h1>Country App</h1>
 <Search onSearch={SearchHandler}/>
 {isLoading && <h2>Loading.....</h2>}
 {error && <h2>{error.message}</h2>}
 {countries && <Countries onRemoveCountry={RemoveCountry} countries={filteredCountry} />}
     
    </div>
  );
}

export default App;
