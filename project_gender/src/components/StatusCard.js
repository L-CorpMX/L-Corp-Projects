import React from 'react';

const StatusCard = ({ status, progress, fileName }) => {
  if (!status) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-6 bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {progress === 100 ? (
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{status}</p>
          {fileName && <p className="text-sm text-gray-500 truncate">{fileName}</p>}
          {progress > 0 && progress < 100 && (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div 
                className="h-1.5 rounded-full bg-blue-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusCard;