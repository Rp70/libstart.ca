import React from 'react';

interface LibStartLogoProps {
  className?: string;
  onClick?: () => void;
}

const LibStartLogo: React.FC<LibStartLogoProps> = ({ className = "w-48", onClick }) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className} ${onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
    >
      <svg
        viewBox="0 6 170 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        role="img"
        aria-label="LibStart.ca Logo"
        className="w-full h-auto"
      >
        <title>LibStart.ca - Start your Canadian journey at the library, for free.</title>
        
        {/* 'Lib' - Dark Blue */}
        <text
          x="0"
          y="35"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="32"
          fill="#1e3a8a" // Tailwind blue-900
        >
          Lib
        </text>

        {/* 'Start' - Lime Green */}
        <text
          x="50"
          y="35"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="32"
          fill="#84cc16" // Tailwind lime-500
        >
          Star
        </text>

        {/* Custom 't' with Arrow - Lime Green */}
        {/* The stem of the t */}
        <rect x="113" y="15" width="6" height="20" rx="1" fill="#84cc16" />
        {/* The crossbar of the t */}
        <rect x="110" y="19" width="12" height="5" rx="1" fill="#84cc16" />
        {/* The Arrow Head on top of the t */}
        <path
          d="M111 14 L116 8 L121 14"
          stroke="#84cc16"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* '.ca' - Lime Green */}
        <text
          x="123"
          y="35"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="32"
          fill="#84cc16"
        >
          .ca
        </text>
      </svg>
    </div>
  );
};

export default LibStartLogo;
