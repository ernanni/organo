import "./index.css";

const TextBox = ({ value, onUpdate, label, placeholder, required }) => {
  const onChange = (event) => {
    onUpdate(event.target.value);
  };

  return (
    <div className="textField">
      <label>{label}</label>
      <input value={value} onChange={onChange} required={required} placeholder={placeholder} />
    </div>
  );
};

export default TextBox;
