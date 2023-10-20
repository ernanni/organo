import { useState } from "react";

import "./index.css";
import TextBox from "../TextBox";
import DropDown from "../DropDown";
import Button from "../Button";

const Form = () => {

  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    console.log('Form Submitted', name, role, image, team);
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
