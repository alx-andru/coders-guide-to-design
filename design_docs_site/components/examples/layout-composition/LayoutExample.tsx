// components/examples/layout-composition/LayoutExample.tsx
import React from 'react';

const LayoutExample = () => {
  return (
    <div className="my-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Layout Principles Illustrated</h3>

      {/* Proximity & Alignment Example */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2 text-blue-600">Proximity & Alignment</h4>
        <div className="grid md:grid-cols-2 gap-4 p-4 bg-white rounded border border-gray-200 shadow">
          <div>
            <p className="text-sm text-green-700 mb-1 font-semibold">Good: Clear Grouping & Alignment</p>
            <div className="mb-2">
              <label htmlFor="name1" className="block text-sm font-medium text-gray-700 mb-0.5">Name:</label>
              <input type="text" id="name1" className="p-1 border border-gray-400 rounded w-full" />
            </div>
            <div className="mb-2">
              <label htmlFor="email1" className="block text-sm font-medium text-gray-700 mb-0.5">Email:</label>
              <input type="email" id="email1" className="p-1 border border-gray-400 rounded w-full" />
            </div>
            <button className="mt-1 bg-blue-500 text-white py-1 px-3 rounded text-sm">Submit</button>
          </div>
          <div>
            <p className="text-sm text-red-700 mb-1 font-semibold">Bad: Poor Grouping & Misalignment</p>
            <label htmlFor="name2" className="block text-sm font-medium text-gray-700 mt-2">Name:</label>
            <button className="mt-3 mb-3 bg-blue-500 text-white py-1 px-3 rounded text-sm">Submit</button>
            <input type="text" id="name2" className="p-1 border border-gray-400 rounded w-full mb-2" />
            <label htmlFor="email2" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email2" className="p-1 border border-gray-400 rounded w-full ml-2" /> 
          </div>
        </div>
      </div>

      {/* White Space Example */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2 text-blue-600">White Space (Negative Space)</h4>
        <div className="grid md:grid-cols-2 gap-4 p-4 bg-white rounded border border-gray-200 shadow">
          <div>
            <p className="text-sm text-green-700 mb-1 font-semibold">Good: Ample White Space</p>
            <div className="space-y-3">
              <div className="p-3 bg-blue-100 rounded">Item 1</div>
              <div className="p-3 bg-blue-100 rounded">Item 2</div>
            </div>
          </div>
          <div>
            <p className="text-sm text-red-700 mb-1 font-semibold">Bad: Cramped Elements</p>
            <div className="p-0">
              <div className="p-3 bg-red-100 rounded mb-0.5">Item 1</div>
              <div className="p-3 bg-red-100 rounded">Item 2</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple Grid Example */}
      <div>
        <h4 className="text-lg font-medium mb-2 text-blue-600">Simple Grid Example (Conceptual 2-column)</h4>
        <div className="p-4 bg-white rounded border border-gray-200 shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 p-3 rounded">Column 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="bg-green-100 p-3 rounded">Column 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="bg-green-100 p-3 rounded md:col-span-2">Full Width Column: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutExample;
