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

  const onSave = (event) => {
    event.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <section className="formContainer">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextBox required={true} label="Nome" placeholder="Digite seu nome" />
        <TextBox required={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextBox required={true} label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDown required={true} label="Time" items={teams} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
