import * as XLSX from 'xlsx'; 

export function cargaDatos(fileInputRef) {
    const archivo = fileInputRef.current.files[0]; 

    if (archivo) {
        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result); // Convierte a array buffer
            const workbook = XLSX.read(data, { type: 'array' }); // Lee el Excel

            const sheetName = workbook.SheetNames[0]; // Obtiene la primera hoja
            const sheet = workbook.Sheets[sheetName]; // Obtiene los datos de la hoja

            // Convierte los datos de la hoja en un objeto JSON
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            console.log("Datos del archivo Excel:", jsonData); // Muestra los datos en consola
            jsonData.forEach( (data,index) => {
                console.log(`Fila ${index}:`);
                for (let clave in data ){
                    console.log(data[clave]);
                }
            })
        
        };

        reader.readAsArrayBuffer(archivo); // Lee el archivo como ArrayBuffer
    } else {
        console.log("No se ha seleccionado ningún archivo");
    }
}
