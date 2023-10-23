import Card from '../Card';
import './index.css';

const Team = ({ name, primaryColor, secondaryColor, team }) => {
  return (
    <section className="teamContainer" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className='members'>
        {team.map(item => <Card key={item.name} item />)}
      </div>
    </section>
  );
};

export default Team;