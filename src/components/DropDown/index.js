import "./index.css";

const DropDown = ({ label, items }) => {

  return (
    <div className="dropDownContainer">
      <label>{label}</label>
      <select>
        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
