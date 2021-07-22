import '../styles/button.scss';

export function Button({ text, ...rest }) {
  return (
    <button id="button" { ...rest }>
      { text }
    </button>
  );
}