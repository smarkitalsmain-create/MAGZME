import { cn } from "@/lib/utils";

export const CameraSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-16 h-16", className)} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="16" width="48" height="36" rx="4" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="3"/>
    <circle cx="32" cy="34" r="10" fill="#fff" stroke="#FF69B4" strokeWidth="2"/>
    <circle cx="32" cy="34" r="5" fill="#87CEEB"/>
    <rect x="24" y="10" width="16" height="8" rx="2" fill="#98FF98"/>
    <circle cx="48" cy="24" r="3" fill="#FFD700"/>
  </svg>
);

export const PolaroidSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-16 h-16", className)} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="4" width="48" height="56" rx="2" fill="#fff" stroke="#FF69B4" strokeWidth="2"/>
    <rect x="12" y="8" width="40" height="36" fill="#87CEEB"/>
    <circle cx="32" cy="26" r="8" fill="#FFB6C1"/>
    <path d="M20 32 L44 32 L38 20 L32 28 L26 18 Z" fill="#98FF98"/>
  </svg>
);

export const GiftSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-16 h-16", className)} viewBox="0 0 64 64" fill="none">
    <rect x="8" y="24" width="48" height="36" rx="4" fill="#FF69B4"/>
    <rect x="8" y="24" width="48" height="10" fill="#FFB6C1"/>
    <rect x="28" y="24" width="8" height="36" fill="#98FF98"/>
    <path d="M32 24 C32 24 24 16 20 12 C16 8 24 4 32 12 C40 4 48 8 44 12 C40 16 32 24 32 24Z" fill="#FFD700" stroke="#FF69B4" strokeWidth="2"/>
  </svg>
);

export const HeartSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-12 h-12", className)} viewBox="0 0 48 48" fill="none">
    <path d="M24 42 C24 42 6 28 6 16 C6 10 11 6 17 6 C21 6 24 9 24 9 C24 9 27 6 31 6 C37 6 42 10 42 16 C42 28 24 42 24 42Z" fill="#FF69B4"/>
    <ellipse cx="15" cy="16" rx="4" ry="3" fill="#FFB6C1" opacity="0.6"/>
  </svg>
);

export const StarSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-10 h-10", className)} viewBox="0 0 40 40" fill="none">
    <path d="M20 2 L24 14 L38 14 L27 22 L31 36 L20 28 L9 36 L13 22 L2 14 L16 14 Z" fill="#FFD700"/>
  </svg>
);

export const FlowerSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-14 h-14", className)} viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="6" fill="#FFD700"/>
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <ellipse
        key={angle}
        cx="28"
        cy="14"
        rx="8"
        ry="12"
        fill="#FFB6C1"
        transform={`rotate(${angle} 28 28)`}
      />
    ))}
  </svg>
);

export const TapeSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-20 h-8", className)} viewBox="0 0 80 32" fill="none">
    <rect x="0" y="4" width="80" height="24" fill="#98FF98" opacity="0.7"/>
    <line x1="0" y1="8" x2="80" y2="8" stroke="#fff" strokeWidth="1" opacity="0.5"/>
    <line x1="0" y1="16" x2="80" y2="16" stroke="#fff" strokeWidth="1" opacity="0.5"/>
    <line x1="0" y1="24" x2="80" y2="24" stroke="#fff" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const EnvelopeSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-16 h-14", className)} viewBox="0 0 64 56" fill="none">
    <rect x="4" y="8" width="56" height="44" rx="2" fill="#FFF8DC"/>
    <path d="M4 12 L32 32 L60 12" stroke="#FF69B4" strokeWidth="2" fill="none"/>
    <path d="M4 8 L32 28 L60 8" fill="#FFB6C1"/>
    <circle cx="50" cy="16" r="6" fill="#FF69B4"/>
  </svg>
);

export const SparkleSticker = ({ className }: { className?: string }) => (
  <svg className={cn("w-8 h-8", className)} viewBox="0 0 32 32" fill="none">
    <path d="M16 0 L18 12 L32 16 L18 20 L16 32 L14 20 L0 16 L14 12 Z" fill="#FFD700"/>
  </svg>
);
