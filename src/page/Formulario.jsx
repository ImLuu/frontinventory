import React, { useRef } from 'react';
import { cargaDatos } from './formula';  

function Formulario() {
  const fileInputRef = useRef(null);  
  const handleSubmit = (event) => {
    event.preventDefault();  
    cargaDatos(fileInputRef); 
  };

  return (
    <>
      <form id="uploadForm" encType="multipart/form-data">
        <input type="file" id="excelFile" ref={fileInputRef} accept=".xls,.xlsx" />
        <button type="submit" onClick={handleSubmit}>Subir Archivo</button>
      </form>
    </>
  );
}

export default Formulario;
