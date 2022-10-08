import React from 'react'
import Country from './Country';
import {v4 as uuidv4} from 'uuid';
import style from './countries.module.css'

function Countries(props) {
  

  return (
    <section className={style.countries}>
        {props.countries.map((country) => {
            const newCountry = {
                 country,
                 id: uuidv4()
            }
            return <Country onRemoveCountry={props.onRemoveCountry} key={newCountry.id} countries={newCountry}/>
        })}
    </section>
  )
}

export default Countries