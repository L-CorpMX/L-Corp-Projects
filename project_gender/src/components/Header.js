import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">ExcelGender Pro</h1>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Gemini API
            </span>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-600">Clasifica y exporta géneros en formato CSV</p>
      </div>
    </header>
  );
};

export default Header;