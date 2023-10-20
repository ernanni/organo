import "./index.css";

const DropDown = ({ label, items, required }) => {

  return (
    <div className="dropDownContainer">
      <label>{label}</label>
      <select required={required}>
        {items.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
