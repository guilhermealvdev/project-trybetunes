import { useParams } from 'react-router-dom';

// Pagina/componente para teste e estudo

function Alv() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Alv Teste</h1>
      <h1>{params.alv}</h1>
      { /* É .alv pois é o parametro na url (:alv) Ver no App.tsx */ }
    </div>
  );
}

export default Alv;
