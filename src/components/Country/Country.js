import React from 'react';
import './Country.css'

const Country = (props) => {

    console.log(props.country);
    const {area,population,name,flags} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt=""/>
            <h2>Country Name: {name.common}</h2>
            <h3>Official Name: {name.official}</h3>
            <h4>Area: {area}</h4>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;