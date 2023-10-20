import "./index.css";

const TextBox = ({ label, placeholder, required }) => {
  return (
    <div className="textField">
      <label>{label}</label>
      <input required={required} placeholder={placeholder} />
    </div>
  );
};

export default TextBox;
