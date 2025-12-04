import { useState, useEffect } from 'react';
import s from './App.module.css';
import {api} from './api/api';
import { Card } from './componentes/card';

function App() {
   const [data, setData] = useState([]);

  useEffect(() => { 
    api
      .get(`/characters/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("NÃO FOI POSSÍVEL ACESSAR API", error);
      });
  }, []);

  return (
    <>
    
      <h1 className={s.title}>Harry Potter⚡</h1>
        <div className={s.wrapCards}>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  image={item.image}
                  name={item.name}
                  house={item.house}
                />
              </div>
            );
          })}
        </div>
    </>
  )
}

export default App
