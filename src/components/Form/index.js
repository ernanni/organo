import "./index.css";
import TextBox from "../TextBox";
import DropDown from "../DropDown";

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

  return (
    <section className="formContainer">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextBox label="Nome" placeholder="Digite seu nome" />
        <TextBox label="Cargo" placeholder="Digite seu cargo" />
        <TextBox label="Imagem" placeholder="Informe o endereço da imagem" />
        <DropDown label="Time" items={teams} />
      </form>
    </section>
  );
};

export default Form;
