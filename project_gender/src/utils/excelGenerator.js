const generateExcel = (data, originalName) => {
  // Crear contenido CSV (formato simple y compatible)
  let csvContent = "data:text/csv;charset=utf-8,Nombre,Género\r\n";
  
  data.forEach(row => {
    csvContent += `${row.name},${row.gender}\r\n`;
  });
  
  // Crear enlace de descarga
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  const fileName = `${originalName.replace(/\.[^/.]+$/, "")}_withgender.xlsx`;
  
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  
  // Descargar
  link.click();
  document.body.removeChild(link);
};

export default generateExcel;