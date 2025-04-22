const generateXLSX = (data, fileName) => {
  // Crear contenido CSV como solución temporal
  // Nota: En producción real deberías implementar un generador XLSX completo
  // o usar una librería como SheetJS (pero evitamos dependencias externas)
  
  let csvContent = "data:text/csv;charset=utf-8,";
  
  // Encabezados
  csvContent += "Nombre,Género,Confianza\r\n";
  
  // Datos
  data.forEach(row => {
    csvContent += `${row.name},${row.gender},${row.confidence}\r\n`;
  });
  
  // Codificar URI
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${fileName.replace(/\.[^/.]+$/, "")}_withgender.csv`);
  document.body.appendChild(link);
  
  // Descargar
  link.click();
  document.body.removeChild(link);
};

export default generateXLSX;