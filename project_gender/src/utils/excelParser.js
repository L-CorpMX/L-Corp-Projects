const parseExcelFile = async (file) => {
  // Simulación de datos del Excel con el orden correcto
  return new Promise((resolve) => {
    setTimeout(() => {
      // Nombres en el orden exacto del archivo Excel
      const namesInOrder = [
        'Abigail', 'Adriana', 'Alejandro', 'Ana', 'Carlos',
        'Claudia', 'Diego', 'Fernanda', 'Jorge', 'Juan',
        'Lucía', 'María', 'Pedro', 'Roberto', 'Sofía', 'Valentina'
      ];
      resolve(namesInOrder);
    }, 800);
  });
};

export default parseExcelFile;