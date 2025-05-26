// components/examples/typography/TypographyExample.tsx
import React from 'react';

const TypographyExample = () => {
  return (
    <div className="my-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Typographic Scale & Hierarchy</h3>
      
      {/* Example of a Typographic Scale */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-2 text-blue-600">Typographic Scale Example</h4>
        <div className="p-4 bg-white rounded border border-gray-200 shadow">
          <h1 className="text-4xl font-bold mb-2">Headline 1 (H1 - text-4xl font-bold)</h1>
          <h2 className="text-3xl font-semibold mb-2">Headline 2 (H2 - text-3xl font-semibold)</h2>
          <h3 className="text-2xl font-medium mb-2">Headline 3 (H3 - text-2xl font-medium)</h3>
          <h4 className="text-xl mb-2">Headline 4 (H4 - text-xl)</h4>
          <p className="text-base mb-1">This is body text (p - text-base). It's the most common text on the page and should be highly readable.</p>
          <p className="text-sm text-gray-600 mb-1">This is smaller text, often used for captions or less emphasized details (p - text-sm text-gray-600).</p>
          <p className="text-xs text-gray-500">This is the smallest text, for footnotes or tertiary information (p - text-xs text-gray-500).</p>
        </div>
      </div>

      {/* Example of Line Length and Spacing */}
      <div>
        <h4 className="text-lg font-medium mb-2 text-blue-600">Line Length & Spacing Example</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded border border-gray-200 shadow">
            <h5 className="text-md font-semibold mb-1 text-green-700">Good: Optimal Line Length & Spacing</h5>
            <p className="text-base leading-relaxed">
              This paragraph has an optimal line length (around 45-75 characters) and good line spacing (leading). 
              This makes it comfortable to read for extended periods. The eye can easily follow from one line to the next without strain.
              Proper leading also prevents lines from feeling too cramped or too far apart, enhancing overall readability.
            </p>
          </div>
          <div className="p-4 bg-white rounded border border-gray-200 shadow">
            <h5 className="text-md font-semibold mb-1 text-red-700">Bad: Poor Line Length & Spacing</h5>
            <p className="text-base leading-tight text-justify">
              This paragraph demonstrates poor readability due to several factors. Firstly, the line length is far too wide, making it difficult for the reader's eye to track from the end of one line to the beginning of the next without getting lost, and this problem is exacerbated by the justified text alignment which can create awkward "rivers" of space. Secondly, the line spacing (leading) is too tight (leading-tight), causing the lines of text to feel cramped and dense, which increases eye strain and makes the text block appear intimidating and difficult to scan or read comfortably for any significant length of time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyExample;
