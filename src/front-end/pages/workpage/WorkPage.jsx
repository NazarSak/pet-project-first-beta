import React from 'react';
import { getAPI } from 'services/getRequest';
import { useEffect, useState } from 'react';

export const Workpage = () => {
  const [infa, setInfa] = useState([]);

  useEffect(() => {
    getAPI()
      .then(data => data.json())
      .then(res => setInfa(res))
      .catch(error => console.log(error));
  }, []);



  return (
    <>
      <h2>Workpage</h2>

      <ul>
      {infa.map(({id,name,image}) => (
          <li key={id}>
            <h4>{name}</h4>
            <img src={image} alt={`${name} `} />
          </li>
        ))}
      </ul>
    </>
  );
};
