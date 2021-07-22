import { useState } from "react";
import { Button } from "../components/Button";

import '../styles/home.scss';

export function Home() {
  const [showList, setShowList] = useState(false);

  return (
    <div id="home">
      <div className="content">
        <h1>Consulta de nome fantasia</h1>

        <div className="button-container">
          <Button 
            text='Montar lista'
            onClick={() => setShowList(true)}
          />
          <Button 
            text='Limpar lista'
            onClick={() => setShowList(false)}
          />
          <Button text='Sair/Voltar'/>
        </div>

        {
          showList && (
            <div className='list-container'>
              <a href={`/details/1`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/2`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/3`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/4`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/5`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/6`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/7`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/8`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/9`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
              <a href={`/details/10`}>
                <strong>Nome fantasia: </strong><span>Prime Home Decor</span>
              </a>
            </div>
          )
        }
      
      </div>
    </div>
  );
}