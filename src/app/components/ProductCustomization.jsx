"use client";

import React, { useState } from 'react'

const ProductCustomization=()=>{
  const [selectedQuality, setSelectedQuality] = useState('ij-i1i2')
  const [selectedCarat, setSelectedCarat] = useState('1ct')
  const [selectedMetal, setSelectedMetal] = useState('platinum')
  const [selectedSize, setSelectedSize] = useState(7)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Gemstone Quality : I-J, I1-I2</h3>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-xs border rounded bg-gray-50">LAB GROWN</button>
            <button className="px-2 py-1 text-xs border rounded">NATURAL</button>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[
            { label: 'F-G, VS', sub: 'Premium' },
            { label: 'K, I3', sub: 'Good' },
            { label: 'I-J, I1-I2', sub: 'Popular' },
            { label: 'H, SI2', sub: 'Better' },
            { label: 'G, VS2', sub: 'Best' }
          ].map((quality) => (
            <button
              key={quality.label}
              onClick={() => setSelectedQuality(quality.label)}
              className={`p-2 border rounded-md text-center ${
                selectedQuality === quality.label ? 'border-blue-600' : 'border-gray-200'
              }`}
            >
              <div className="text-xs">{quality.label}</div>
              <div className="text-xs text-gray-500">{quality.sub}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Total Carat Weight : 1 Ct</h3>
        <div className="grid grid-cols-5 gap-2">
          {['1/8 Ct', '1/4 Ct', '1/2 Ct', '1 Ct', '1.5 Ct'].map((carat) => (
            <button
              key={carat}
              onClick={() => setSelectedCarat(carat)}
              className={`p-2 border rounded-md ${
                selectedCarat === carat ? 'border-blue-600' : 'border-gray-200'
              }`}
            >
              <div className="text-xs">{carat}</div>
              {carat === '1 Ct' && <div className="text-xs text-gray-500">Popular</div>}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Metal Type : Platinum</h3>
        <div className="grid grid-cols-3 gap-2">
          {[
            { type: 'Yellow Gold', color: 'bg-yellow-200' },
            { type: 'Rose Gold', color: 'bg-rose-200' },
            { type: 'Platinum', color: 'bg-gray-100' }
          ].map((metal) => (
            <button
              key={metal.type}
              onClick={() => setSelectedMetal(metal.type)}
              className={`p-2 border rounded-md flex items-center gap-2 ${
                selectedMetal === metal.type ? 'border-blue-600' : 'border-gray-200'
              }`}
            >
              <span className={`w-4 h-4 rounded-full ${metal.color}`}></span>
              <span className="text-sm">{metal.type}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Select Size</h3>
          <button className="text-sm text-blue-600">Size Guide</button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hidden">
          {[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-[48px] h-12 border rounded-md flex items-center justify-center ${
                selectedSize === size ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCustomization;