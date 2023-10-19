import "./index.css";

const DropDown = ({ label, items }) => {
  console.log(items)
  return (
    <div>
      <label>{label}</label>
      <select>
        {items.map(item => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
