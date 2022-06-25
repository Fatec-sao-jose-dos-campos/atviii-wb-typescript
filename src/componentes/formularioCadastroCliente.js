import { useState } from 'react';

export default function FormularioCadastroCliente(props) {
  const estiloBotao = `btn waves-effect waves-light ${props.tema}`;

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(
      `Usuário ${name} ${lastName} do telefone ${phone} e e-mail ${email} foi cadastrado com sucesso!`,
    );
  }

  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  return (
    <form onSubmit={cadastrarUsuario}>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="first_name">nome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label htmlFor="last_name">sobrenome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="telefone"
                type="text"
                className="validate"
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="telefone">telefone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">e-mail</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className={estiloBotao} type="submit" name="action">
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </form>
  );
}
