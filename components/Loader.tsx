
import React from 'react';

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = "ЛИСТАЕМ СЦЕНАРИЙ..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-8 border-black bg-white animate-spin"></div>
        <div className="absolute inset-2 border-4 border-black bg-red-600 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center font-anton text-4xl">?</div>
      </div>
      <p className="mt-6 font-bebas text-2xl tracking-widest animate-bounce bg-black text-white px-2 uppercase">
        {text}
      </p>
    </div>
  );
};
