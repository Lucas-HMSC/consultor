import '../styles/input.scss';

export function Input({ label, value, editable = false, ...rest }) {
  return (
    <div id="input">
      <label htmlFor={value}>
        { label }
      </label>
      <input  
        type="text"
        defaultValue={ value }
        id={ value }
        disabled={ !editable }
        { ...rest }
      />
    </div>
  );
}