import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
function CadastroCategoria() {
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  console.log(nomeDaCategoria);

  // function funcaoHandlerQueOErroPediu() {

  // }

  return (
    <PageDefault>
      <h1>Cadatro de Categoria: {nomeDaCategoria}</h1>
      <form>
        {/* ex: State */}
        <label>
          Nome:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
              console.log('[nomeDaCategoria]', nomeDaCategoria);
              console.log('[informacao do evento]', infosDoEvento.target.value);
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>
        <button>Cadastrar</button>
      </form>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
