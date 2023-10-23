import { useEffect, useState } from "react";
import { Banner, Form, Team, Footer } from "./components";

function App() {

  const teams = [
    { name: 'Programação', primaryColor: '#57C278', secondaryColor: '#D9F7E9' },
    { name: 'Front-End', primaryColor: '#82CFFA', secondaryColor: '#E8F8FF' },
    { name: 'Data Science', primaryColor: '#A6D157', secondaryColor: '#F0F8E2' },
    { name: 'Devops', primaryColor: '#E06B69', secondaryColor: '#FDE7E8' },
    { name: 'UX e Design', primaryColor: '#DB6EBF', secondaryColor: '#FAE9F5' },
    { name: 'Mobile', primaryColor: '#FFBA05', secondaryColor: '#FFF5D9' },
    { name: 'Inovação e Gestão', primaryColor: '#FF8A29', secondaryColor: '#FFEEDF' },
  ];

  const [members, setMembers] = useState([]);

  const onFormSubmit = (value) => {
    setMembers([...members, value]);
  };

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(item => item.name)} onSubmitted={value => onFormSubmit(value)} />
      {teams.map(teamsItem =>
        <Team
          key={teamsItem.name}
          name={teamsItem.name}
          primaryColor={teamsItem.primaryColor}
          secondaryColor={teamsItem.secondaryColor}
          members={members.filter(member => member.team === teamsItem.name)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
