import "./index.css";

const DropDown = ({ value, onUpdate, label, items, required }) => {

  return (
    <div className="dropDownContainer">
      <label>{label}</label>
      <select
        required={required}
        value={value}
        onChange={event => onUpdate(event.target.value)}
      >
        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
