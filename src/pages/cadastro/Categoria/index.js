import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
//
function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }; //#000  #B0E0E6

  //
  const [categorias, setCategorias] = useState([]); //sempre o setCategorias altera o useState 29/03/2021
  const [values, setValues] = useState(valoresIniciais); //const [nomeDaCategoria, setNomeDaCategoria] = useState('Teste');

  //console.log(nomeDaCategoria);
  function setValue(chave, valor) {
    //chave: pode ser nome , descrição, etc
    setValues({
      ...values,
      [chave]: valor, //nome : 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // console.log('[nomeDaCategoria]', nomeDaCategoria);
    //  console.log('[informacao do evento]', infosDoEvento.target.value);
    //    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value // otimizado
      //getAttribute('name'),
      //value
    );
  }

  return (
    <PageDefault>
      <h1>Cadatro de Categoria: {values.nome}</h1>
      {/*<h1>Cadatro de Categoria: {nomeDaCategoria}</h1>*/}
      <form
        // style={{ background: nomeDaCategoria }}
        onSubmit={function handleSubmit(infosDoEvento) {
          //(infoDoEvento como parametro para evitar default carregamento tela)
          infosDoEvento.preventDefault();
          console.log('você tentou enviar o Form!');
          // prettier-ignore
          setCategorias([
            ...categorias,
           values// nomeDaCategoria
          ]);
          setValues(valoresIniciais);
        }}
      >
        <div>
          {/* ex: State */}
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.nome} //value={nomeDaCategoria}
              name="nome"
              onChange={handleChange}
              // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
              //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
              //   //  console.log('[informacao do evento]', infosDoEvento.target.value);
              //   setValue(
              //     infosDoEvento.target.getAttribute('name'),
              //     infosDoEvento.target.value
              //   ); //  setNomeDaCategoria(infosDoEvento.target.value);
              // }
              // }
            />
          </label>

          <label>
            Descrição:
            <textarea
              type="textarea"
              value={values.descricao} //value={nomeDaCategoria}
              name="descricao"
              onChange={handleChange}
              // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
              //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
              //   //  console.log('[informacao do evento]', infosDoEvento.target.value);
              //   //setValue('Descricção', infosDoEvento.target.value); //setNomeDaCategoria(infosDoEvento.target.value);
              // }}
            />
          </label>

          <label>
            Cor:
            <input
              type="color"
              value={values.cor} //value={nomeDaCategoria}
              name="cor"
              onChange={handleChange}
              // onChange={function funcaoHandlerQueOErroPediu(infosDoEvento) {
              //   // console.log('[nomeDaCategoria]', nomeDaCategoria);
              //   //  console.log('[informacao do evento]', infosDoEvento.target.value);
              //   //setValue('COR', infosDoEvento.target.value); //setNomeDaCategoria(infosDoEvento.target.value);
              // }}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
