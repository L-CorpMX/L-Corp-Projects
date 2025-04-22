import React from 'react';

const StatusBar = ({ progress, status, totalProcessed }) => {
  if (!status) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{status}</span>
        {totalProcessed > 0 && (
          <span className="text-sm text-gray-500">{totalProcessed} procesados</span>
        )}
      </div>
      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="h-2.5 rounded-full bg-blue-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default StatusBar;