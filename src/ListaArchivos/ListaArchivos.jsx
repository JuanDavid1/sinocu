import axios from 'axios'
import React from 'react'
import ItemArchivos from '../ItemArchivos/ItemArchivos'

const ListaArchivos = ({files, removeFile}) => {

    const deleteFileHandler = (_name) =>{
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
        .then((res) => removeFile(_name))
        .catch((err) => console.error(err))
    }
    
  return (
    <ul className='file-list'>
        {
            files &&
            files.map(f => <ItemArchivos
                key={f.name}
                file={f}
                deleteFile={deleteFileHandler}
            ></ItemArchivos>)
        }
    </ul>
  )
}

export default ListaArchivos