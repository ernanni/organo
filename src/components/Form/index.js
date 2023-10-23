import { useState } from "react";

import TextBox from "../TextBox";
import DropDown from "../DropDown";
import Button from "../Button";
import "./index.css";

const Form = ({ teams, onSubmitted }) => {

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState(teams[0]);

  const onSave = (event) => {
    event.preventDefault();
    onSubmitted({ name, role, image, team });
    setName('');
    setRole('');
    setImage('');
    setTeam(teams[0]);
  };

  return (
    <section className="formContainer">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextBox
          value={name}
          onUpdate={value => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextBox
          value={role}
          onUpdate={value => setRole(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextBox
          value={image}
          onUpdate={value => setImage(value)}
          required={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
        />
        <DropDown
          value={team}
          onUpdate={value => setTeam(value)}
          required={true}
          label="Time"
          items={teams}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
