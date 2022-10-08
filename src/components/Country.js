import React from 'react'
import style from './country.module.css'

function Country(props) {
  const {name, flags, capital, population, area} = props.countries.country;
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  }
  return (
    <article className={style.country}>
      <div>
        <img className={style.flag} src={flags.png} alt={name.common} />
        <h3>{name.common}</h3>
        <h3>{population}</h3>
        <h3>{capital}</h3>
        <h3>{area}</h3>
        <button onClick={() => {
          handleRemoveCountry(name.common)
        }} className={style.btn}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country