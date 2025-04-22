const detectGender = async (name) => {
  // Simulación mejorada de la API Gemini
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Base de datos de nombres conocidos
  const femaleNames = ['Abigail', 'Adriana', 'Ana', 'Claudia', 'Fernanda', 'Lucía', 'María', 'Sofía', 'Valentina'];
  const maleNames = ['Alejandro', 'Carlos', 'Diego', 'Jorge', 'Juan', 'Pedro', 'Roberto'];
  
  if (femaleNames.includes(name)) return 'Mujer';
  if (maleNames.includes(name)) return 'Hombre';
  
  // Para nombres no listados
  const lastLetter = name.charAt(name.length - 1).toLowerCase();
  return ['a', 'e', 'i'].includes(lastLetter) ? 'Mujer' : 'Hombre';
};

export default detectGender;