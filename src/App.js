import { useState } from 'react';
import Mapa from './components/Mapa/Mapa';
import Navbar from './components/Navbar';
import SubirArchivo from './components/SubirArchivo/SubirArchivo';
import ListaArchivos from "./ListaArchivos/ListaArchivos"

function App() {
  const [files, setFiles]= useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  
  return (
    <div className="App">
   
      <Navbar></Navbar>
      
      <div className="title">Subir Archivos</div>
      <SubirArchivo files={files} setFiles={setFiles} removeFile={removeFile}></SubirArchivo>
      <ListaArchivos files={files} removeFile={removeFile}></ListaArchivos>   
      <Mapa></Mapa>
      
    </div>
  );
}

export default App;
