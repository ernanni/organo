import './index.css';

const TextBox = ({label, placeholder}) => {
    return (
        <div className='textField'>
            <label>{label}</label>
            <input placeholder={placeholder} />
        </div>
    );
}

export default TextBox;