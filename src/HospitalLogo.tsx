export default function HospitalLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dégradé bleu-vert */}
      <defs>
        <linearGradient id="clinicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C7BE5" />
          <stop offset="100%" stopColor="#25B96E" />
        </linearGradient>
      </defs>
      
      {/* Bâtiment principal */}
      <rect x="20" y="30" width="60" height="60" rx="8" fill="url(#clinicGradient)" />
      
      {/* Fenêtres blanches */}
      <rect x="30" y="40" width="12" height="12" rx="2" fill="white" opacity="0.9" />
      <rect x="58" y="40" width="12" height="12" rx="2" fill="white" opacity="0.9" />
      <rect x="30" y="60" width="12" height="12" rx="2" fill="white" opacity="0.9" />
      <rect x="58" y="60" width="12" height="12" rx="2" fill="white" opacity="0.9" />
      
      {/* Croix médicale au centre */}
      <g transform="translate(50, 50)">
        <rect x="-3" y="-12" width="6" height="24" rx="2" fill="white" />
        <rect x="-12" y="-3" width="24" height="6" rx="2" fill="white" />
        
        {/* Contour doré pour la croix */}
        <rect x="-3" y="-12" width="6" height="24" rx="2" fill="none" stroke="#FFC107" strokeWidth="1" />
        <rect x="-12" y="-3" width="24" height="6" rx="2" fill="none" stroke="#FFC107" strokeWidth="1" />
      </g>
      
      {/* Toit/accent supérieur */}
      <path d="M15 30 L50 10 L85 30" fill="#1C63C5" />
      <circle cx="50" cy="15" r="4" fill="#FFC107" />
    </svg>
  );
}