
import { useState } from 'react';
import SubirArchivo from './SubirArchivo/SubirArchivo';
import ListaArchivos from './ListaArchivos/ListaArchivos';
import LoginForm from './components/LoginForm';
import Mapa from './components/Mapa/Mapa';

function App() {

  const adminUser ={
    email:"admin@admin.com",
    password: "admin123"
  }
  const [user, setUser]= useState({name:"", email:""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });      
  }else{  
    console.log("Details do not match!");
    setError("Details do not match!")
  }
}

  const Logout = () => {
    setUser({name: "", email:""});
  }
 
  const [files, setFiles]= useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <div className="App">
      {(user.email !== " ") ? (
        <div className='welcome'> 
         <h2>Welcome,<span>{user.name}</span></h2> 
         <button onClick={Logout}>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}></LoginForm>
      )}


      <p className="title">Subir Archivos</p>
      <SubirArchivo files={files} setFiles={setFiles}></SubirArchivo>
      <ListaArchivos files={files} removeFile={removeFile}></ListaArchivos>
      <Mapa></Mapa>
    </div>
  );
}

export default App;
