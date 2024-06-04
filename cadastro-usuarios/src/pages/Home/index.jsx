import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";

import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  const inpuName = useRef();
  const inpuAge = useRef();
  const inpuEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios')

    setUsers(usersFromApi.data); // usersFromApi.data;
  }

  async function createUser() { 
    const user = {
      name: inpuName.current.value,
      age: inpuAge.current.value,
      email: inpuEmail.current.value
    }

    await api.post('/usuarios', user)

    getUsers();
  }

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" name="nome" placeholder="Nome" ref={inpuName}/>
        <input type="number" name="idade" placeholder="Idade" ref={inpuAge} />
        <input type="email" name="email" placeholder="Email" ref={inpuEmail} />
        <button type="button" onClick={createUser}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>
            <img src={Trash} alt="Lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
