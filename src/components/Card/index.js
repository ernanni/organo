import './index.css';

const Card = ({ member, backgroundColor }) => {
  const { name, role, image } = member;

  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className='rodape'>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Card;