
import React from 'react';

interface NutrigoLogoProps {
  size?: "sm" | "md" | "lg";
}

export default function NutrigoLogo({ size = "md" }: NutrigoLogoProps) {
  const sizeClass = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10"
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative ${sizeClass[size]}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-full h-1/3 bg-nutrigo-yellow rounded-t-full"></div>
          <div className="w-full h-1/3 bg-nutrigo-green rounded-b-full"></div>
        </div>
      </div>
      <span className="font-bold text-xl">Nutrigo</span>
    </div>
  );
}
