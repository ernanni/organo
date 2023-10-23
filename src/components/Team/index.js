import Card from '../Card';
import './index.css';

const Team = ({ name, primaryColor, secondaryColor, members }) => {

  return (
    <section className="teamContainer" style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{name}</h3>
      <div className='members'>
        {members.map(item => <Card key={item.name} member={item} />)}
      </div>
    </section>
  );
};

export default Team;