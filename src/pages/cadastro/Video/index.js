import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
function CadastroVideo() {
  return (
    <PageDefault>
      <br />
      <h1>Cadatro video</h1>
      <Link to="/cadastro/categoria">Cadastro Categoria</Link>
    </PageDefault>
  );
}
export default CadastroVideo;
