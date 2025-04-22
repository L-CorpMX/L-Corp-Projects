import React, { useState } from 'react';

const FileUploader = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(e.type === 'dragenter' || e.type === 'dragover');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files?.length) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files?.length) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`relative w-full max-w-md mx-auto border-2 border-dashed rounded-xl p-8 text-center transition-all ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-lg font-medium text-gray-700">Arrastra tu archivo Excel</p>
        <p className="text-sm text-gray-500">o</p>
        <label className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Seleccionar archivo
          <input 
            type="file" 
            className="hidden" 
            accept=".xlsx,.xls" 
            onChange={handleChange} 
          />
        </label>
      </div>
    </div>
  );
};

export default FileUploader;