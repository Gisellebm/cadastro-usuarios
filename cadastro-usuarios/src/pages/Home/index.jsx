import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "1",
      name: "João",
      age: "25",
      email: "a@a.com",
    },
    {
      id: "2",
      name: "Maria",
      age: "30",
      email: "b@b.com",
    },
    {
      id: "3",
      name: "Pedro",
      age: "35",
      email: "c@c.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="nome" placeholder="Nome"/>
        <input type="number" name="idade" placeholder="Idade" />
        <input type="email" name="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="Lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
