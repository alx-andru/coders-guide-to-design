// components/examples/color-theory/HarmonyExample.tsx
import React from 'react';

const HarmonyExample = () => {
  const ColorBox = ({ bgColor, title }: { bgColor: string; title: string }) => (
    <div className={`h-16 w-full md:w-16 rounded shadow flex items-center justify-center p-1 ${bgColor}`}>
      <span className="text-xs text-black bg-white bg-opacity-50 px-1 rounded">{title}</span>
    </div>
  );

  return (
    <div className="my-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">Color Harmony Example</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Good Example: Complementary Harmony */}
        <div>
          <h4 className="text-lg font-medium mb-2 text-green-700">Good: Complementary Harmony</h4>
          <p className="text-sm text-gray-600 mb-2">
            Blue and Orange are opposite on the color wheel, creating strong contrast and visual interest when used appropriately (e.g., one as dominant, the other as accent).
          </p>
          <div className="flex space-x-2 p-3 bg-white rounded border border-gray-200 shadow">
            <ColorBox bgColor="bg-blue-500" title="Blue" />
            <ColorBox bgColor="bg-orange-500" title="Orange" />
            <ColorBox bgColor="bg-blue-200" title="Light Blue" />
            <ColorBox bgColor="bg-gray-600" title="Neutral Gray" />
          </div>
        </div>

        {/* Bad Example: Clashing/Unbalanced Colors */}
        <div>
          <h4 className="text-lg font-medium mb-2 text-red-700">Bad: Clashing/Unbalanced Colors</h4>
          <p className="text-sm text-gray-600 mb-2">
            Using multiple, highly saturated colors without a clear strategy or neutral balancing can create a visually jarring and unprofessional look.
          </p>
          <div className="flex space-x-2 p-3 bg-white rounded border border-gray-200 shadow">
            <ColorBox bgColor="bg-lime-500" title="Lime" />
            <ColorBox bgColor="bg-red-600" title="Red" />
            <ColorBox bgColor="bg-purple-600" title="Purple" />
            <ColorBox bgColor="bg-yellow-400" title="Yellow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarmonyExample;
