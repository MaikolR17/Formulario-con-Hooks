import { useState } from 'react';
import Formulario from '../Formulario/Formulario'
import './App.css';
import Usuarios from '../Usuarios/Usuarios';

const App = () => {
  const [usuarios, setUsuarios] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
  })
  return (
    <div className='App'>
      <Formulario usuarios={usuarios} setUsuarios={setUsuarios} />
      <Usuarios nuevoUsuario={usuarios} />
    </div>
  );
}

export default App;
