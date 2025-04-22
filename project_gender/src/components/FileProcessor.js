import React, { useState, useEffect } from 'react';
import parseExcelFile from '../utils/excelParser';
import detectGender from '../utils/genderDetector';

const FileProcessor = ({ file, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const processFile = async () => {
      setStatus('Leyendo archivo Excel...');
      setProgress(5);
      
      try {
        // Leer nombres manteniendo el orden original
        const names = await parseExcelFile(file);
        setStatus(`Analizando ${names.length} nombres...`);
        setProgress(10);
        
        // Procesar cada nombre en orden
        const results = [];
        for (let i = 0; i < names.length; i++) {
          const gender = await detectGender(names[i]);
          results.push({ name: names[i], gender });
          setProgress(10 + ((i + 1) / names.length) * 85);
        }
        
        setStatus('Procesamiento completado');
        setProgress(100);
        onComplete(results);
      } catch (error) {
        setStatus('Error al procesar el archivo');
        console.error(error);
      }
    };

    processFile();
  }, [file, onComplete]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">{status}</span>
        <span className="text-gray-500">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="h-2 rounded-full bg-blue-500 transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default FileProcessor;