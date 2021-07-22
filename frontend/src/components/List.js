import '../styles/list.scss';

export function List({ name, id }) {
  return (
    <div className='list-container'>
      <a href={`/details/${id}`}>
        <strong>Nome fantasia: </strong><span>{ name }</span>
      </a>
    </div>
  );
}