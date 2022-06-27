import React from 'react'
import './ItemArchivos.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileAlt, faSpinner , faTrash} from '@fortawesome/free-solid-svg-icons'


const ItemArchivos = ({file, deleteFile}) => {
  return (
    <li 
      className="list-item" 
      key={file.name}>
      <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
      <p>{file.name}</p>
        <div className="actions">
          {file.isUploading && 
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" onClick={()=> deleteFile()}></FontAwesomeIcon>
          }
          {!file.isUploading && 
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteFile(file.name)}></FontAwesomeIcon>
          }
        </div>                
    </li>
  )
}

export default ItemArchivos