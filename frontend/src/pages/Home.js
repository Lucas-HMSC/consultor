import { useState } from "react";

import { Button } from "../components/Button";
import { List } from "../components/List";

import '../styles/home.scss';

export function Home() {
  const [list, setList] = useState([]);
  const [showList, setShowList] = useState(false);

  async function handleFetchList() {
    const data = await fetch('https://localhost:44305/person');
    const response = await data.json();
    
    setList(response);
    setShowList(true);
  }

  function handleClickQuitOrReturn() {
    if (showList) setShowList(false);
  }

  return (
    <div id="home">
      <div className="content">
        <h1>Consulta de nome fantasia</h1>

        <div className="button-container">
          <Button 
            text='Montar lista'
            onClick={handleFetchList}
          />
          <Button 
            text='Limpar lista'
            onClick={() => setShowList(false)}
          />
          <Button 
            text='Sair/Voltar'
            onClick={handleClickQuitOrReturn}
          />
        </div>

        {
          showList && (
            list.map((item) => {
              return (
                <List 
                  key={item.pessoA_ID}
                  id={item.pessoA_ID}
                  name={item.nomE_FANTASIA} 
                />
              )
            })
          )
        }
      </div>
    </div>
  );
}