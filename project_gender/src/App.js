import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import FileProcessor from './components/FileProcessor';
import DataTable from './components/DataTable';

const App = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setResults(null);
    setIsProcessing(true);
  };

  const handleProcessingComplete = (data) => {
    setResults(data);
    setIsProcessing(false);
  };

  const resetAnalysis = () => {
    setFile(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">ExcelGender Analyzer</h1>
          <p className="text-lg text-gray-600 mt-2">Análisis de género por nombre</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          {!file ? (
            <FileUploader onFileUpload={handleFileUpload} />
          ) : isProcessing ? (
            <FileProcessor file={file} onComplete={handleProcessingComplete} />
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Resultados</h2>
                <button
                  onClick={resetAnalysis}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Analizar otro archivo
                </button>
              </div>
              <DataTable data={results} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

// DONE