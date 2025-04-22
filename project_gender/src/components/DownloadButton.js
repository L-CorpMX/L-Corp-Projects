import React from 'react';
import generateExcel from '../utils/excelGenerator';

const DownloadButton = ({ fileName, data }) => {
  const handleDownload = () => {
    generateExcel(data, fileName);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      Descargar {fileName.replace('.xlsx', '')}_withgender.xlsx
    </button>
  );
};

export default DownloadButton;