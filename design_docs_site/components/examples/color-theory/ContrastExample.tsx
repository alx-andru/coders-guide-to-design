// components/examples/color-theory/ContrastExample.tsx
import React from 'react';

const ContrastExample = () => {
  return (
    <div className="my-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Contrast Example</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Good Contrast Example */}
        <div>
          <h4 className="text-lg font-medium mb-2 text-green-700">Good Contrast</h4>
          <div className="bg-white p-4 rounded border border-gray-200 shadow">
            <p className="text-black text-base mb-1">Black text on white background (High Contrast)</p>
            <p className="text-gray-700 text-sm mb-2">WCAG AA Compliant for normal text.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Readable Button
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded border border-gray-700 shadow mt-4">
            <p className="text-white text-base mb-1">White text on dark background (High Contrast)</p>
             <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 mt-2">
              Readable Button
            </button>
          </div>
        </div>

        {/* Bad Contrast Example */}
        <div>
          <h4 className="text-lg font-medium mb-2 text-red-700">Bad Contrast</h4>
          <div className="bg-gray-300 p-4 rounded border border-gray-400 shadow">
            <p className="text-gray-500 text-base mb-1">Gray text on light gray background (Low Contrast)</p>
            <p className="text-red-400 text-sm mb-2">Fails WCAG AA for normal text.</p>
            <button className="bg-blue-300 text-blue-800 py-2 px-4 rounded">
              Hard-to-Read Button
            </button>
          </div>
          <div className="bg-yellow-500 p-4 rounded border border-yellow-600 shadow mt-4">
            <p className="text-orange-900 text-base mb-1">Dark orange text on yellow background (Low Contrast)</p>
            <button className="bg-green-300 text-green-700 py-2 px-4 rounded mt-2">
              Low Contrast Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContrastExample;
