import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']); //sempre o setCategorias altera o useState 29/03/2021
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');
  //console.log(nomeDaCategoria);

  return (
    <PageDefault>
      <h1>Cadatro de Categoria: {nomeDaCategoria}</h1>
      <form
        style={{ background: nomeDaCategoria }}
        onSubmit={function handleSubmit(infosDoEvento) {
          //(infoDoEvento como parametro para evitar default carregamento tela)
          infosDoEvento.preventDefault();
          console.log('você tentou enviar o Form!');
          // prettier-ignore
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ]);
        }}
      >
        <div>
          {/* ex: State */}
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                // console.log('[nomeDaCategoria]', nomeDaCategoria);
                //  console.log('[informacao do evento]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>

          {/* ex: State */}
          <label>
            Descrição:
            <textarea
              type="text"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                // console.log('[nomeDaCategoria]', nomeDaCategoria);
                //  console.log('[informacao do evento]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>

          {/* ex: State */}
          <label>
            Cor:
            <input
              type="color"
              value={nomeDaCategoria}
              onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
                // console.log('[nomeDaCategoria]', nomeDaCategoria);
                //  console.log('[informacao do evento]', infosDoEvento.target.value);
                setNomeDaCategoria(infosDoEvento.target.value);
              }}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categorias}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
