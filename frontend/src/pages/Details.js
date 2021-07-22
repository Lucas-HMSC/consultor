import { useParams } from "react-router-dom";

export function Details() {
  const { id } = useParams();

  return (
    <div>Teste do item { id }</div>
  );
}