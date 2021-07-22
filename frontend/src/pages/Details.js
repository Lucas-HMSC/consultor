import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import '../styles/details.scss';

export function Details() {
  const [item, setItem] = useState({});
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function handleFetch() {
      const data = await fetch('https://localhost:44305/person');
      const response = await data.json();
      
      response.forEach((item) => {
        if (item.pessoA_ID === Number(id)) {
          setItem(item);
          setNewName(item.nomE_FANTASIA);
        }
      });
    }

    handleFetch();
    setLoading(false);
  }, [id]);

  function handleClickQuitOrReturn() {
    history.push('/');
  }

  async function handleClickSave() {
    try {
      await fetch('https://localhost:44305/person', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ PESSOA_ID: Number(id), NOME_FANTASIA: newName })
      });

      history.push('/');
    } catch(err) {
      console.log(err);
    } 
  }

  if (loading) return <div></div>;

  return (
    <div id="details">
      <div className="content">
        <h1>Detalhes</h1>

        <div className="input-container">
          <Input
            label='ID'
            value={item.pessoA_ID}
          />
          <Input
            label='Nome Fantasia'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            editable
          />
          <Input
            label='CPF/CNPJ'
            value={item.cnpJ_CPF}
          />
        </div>

        <div className="button-container">
          <Button 
            text='Gravar'
            onClick={handleClickSave}
          />
          <Button 
            text='Sair/Voltar'
            onClick={handleClickQuitOrReturn}
          />
        </div>
      </div>
    </div>
  );
}