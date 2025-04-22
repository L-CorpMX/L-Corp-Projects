import React from 'react';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No se encontraron resultados. Sube un archivo Excel para analizar.
      </div>
    );
  }

  // Estadísticas
  const total = data.length;
  const maleCount = data.filter(item => item.gender === 'Hombre').length;
  const femaleCount = total - maleCount;

  return (
    <div className="space-y-6">
      {/* Resumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Total</p>
          <p className="text-2xl font-semibold text-gray-900">{total}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Hombres</p>
          <p className="text-2xl font-semibold text-blue-600">{maleCount}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm font-medium text-gray-500">Mujeres</p>
          <p className="text-2xl font-semibold text-pink-600">{femaleCount}</p>
        </div>
      </div>

      {/* Tabla */}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Género
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.gender === 'Hombre' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
                    {item.gender}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;