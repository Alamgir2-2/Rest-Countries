import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">

      <Countries></Countries>

      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}













// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))

//   },[])
//   return(
//     <div>
//       <h1>Visiting Every Country of the World! </h1>
//       <h1>Avilable Countries: {countries.length}</h1>

//     {
//       countries.map(country => <Country name = {country.name.common} population ={country.population} area = {country.area}></Country>)
//     }

//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//       <h5>Area: {props.area}</h5>
//     </div>
//   )
// }

export default App;
