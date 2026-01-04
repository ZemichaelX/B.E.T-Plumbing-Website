/*
 * SVG Icon Library
 * Professional plumbing service icons
 */

const Icons = {
  // Emergency Plumbing Icon
  emergency: `<svg viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 52c-13.255 0-24-10.745-24-24S18.745 8 32 8s24 10.745 24 24-10.745 24-24 24z"/>
    <path d="M32 16c-1.105 0-2 .895-2 2v16c0 1.105.895 2 2 2s2-.895 2-2V18c0-1.105-.895-2-2-2zm0 24c-1.105 0-2 .895-2 2v2c0 1.105.895 2 2 2s2-.895 2-2v-2c0-1.105-.895-2-2-2z"/>
    <circle cx="32" cy="32" r="3" opacity="0.3"/>
  </svg>`,
  
  // Water Heater Icon
  waterHeater: `<svg viewBox="0 0 64 64" fill="currentColor">
    <rect x="16" y="8" width="32" height="48" rx="4" fill="currentColor" opacity="0.2"/>
    <rect x="18" y="10" width="28" height="44" rx="3" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="30" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M28 30 L32 26 L36 30 L32 34 Z" fill="currentColor"/>
    <line x1="24" y1="16" x2="40" y2="16" stroke="currentColor" stroke-width="2"/>
    <line x1="24" y1="44" x2="40" y2="44" stroke="currentColor" stroke-width="2"/>
    <path d="M32 38 Q32 42, 28 44 Q32 46, 32 50" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>
    <path d="M32 38 Q32 42, 36 44 Q32 46, 32 50" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.6"/>
  </svg>`,
  
  // Drain Cleaning Icon
  drainCleaning: `<svg viewBox="0 0 64 64" fill="currentColor">
    <circle cx="32" cy="32" r="20" fill="currentColor" opacity="0.2"/>
    <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.4"/>
    <path d="M32 14 L32 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M32 42 L32 50" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 32 L22 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M42 32 L50 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 20 L24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 40 L44 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  
  // Pipe Repair Icon
  pipeRepair: `<svg viewBox="0 0 64 64" fill="currentColor">
    <rect x="8" y="26" width="48" height="12" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="10" y="28" width="44" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="2"/>
    <rect x="28" y="20" width="8" height="24" fill="currentColor" opacity="0.3"/>
    <path d="M24 28 L24 36 L20 36 L20 28 Z" fill="currentColor"/>
    <path d="M40 28 L40 36 L44 36 L44 28 Z" fill="currentColor"/>
    <circle cx="32" cy="32" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M28 28 L36 36 M36 28 L28 36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`,
  
  // Sewer Line Icon  
  sewerLine: `<svg viewBox="0 0 64 64" fill="currentColor">
    <path d="M16 20 Q32 12, 48 20" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M16 20 L16 44 Q32 52, 48 44 L48 20" fill="currentColor" opacity="0.2"/>
    <path d="M16 20 L16 44" stroke="currentColor" stroke-width="2"/>
    <path d="M48 20 L48 44" stroke="currentColor" stroke-width="2"/>
    <path d="M16 44 Q32 52, 48 44" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="24" y1="24" x2="24" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="32" y1="22" x2="32" y2="42" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
    <line x1="40" y1="24" x2="40" y2="40" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  </svg>`,
  
  // Fixture Installation Icon
  fixture: `<svg viewBox="0 0 64 64" fill="currentColor">
    <path d="M32 12 L32 26" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="28" r="6" fill="currentColor" opacity="0.3"/>
    <path d="M26 28 Q26 38, 32 42 Q38 38, 38 28" fill="currentColor" opacity="0.2"/>
    <path d="M26 28 Q26 38, 32 42 Q38 38, 38 28" fill="none" stroke="currentColor" stroke-width="2"/>
    <ellipse cx="32" cy="42" rx="12" ry="3" fill="currentColor" opacity="0.2"/>
    <path d="M20 42 Q20 48, 32 52 Q44 48, 44 42" fill="none" stroke="currentColor" stroke-width="2"/>
    <line x1="28" y1="32" x2="28" y2="38" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <line x1="32" y1="32" x2="32" y2="38" stroke="currentColor" stroke-width="1" opacity="0.5"/>
    <line x1="36" y1="32" x2="36" y2="38" stroke="currentColor" stroke-width="1" opacity="0.5"/>
  </svg>`,
  
  // Garbage Disposal Icon
  disposal: `<svg viewBox="0 0 64 64" fill="currentColor">
    <rect x="20" y="16" width="24" height="8" rx="1" fill="currentColor" opacity="0.2"/>
    <rect x="18" y="24" width="28" height="24" rx="2" fill="currentColor" opacity="0.2"/>
    <rect x="20" y="26" width="24" height="20" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle cx="32" cy="36" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M28 36 L32 32 L36 36 L32 40 Z" fill="currentColor"/>
    <rect x="28" y="48" width="8" height="8" rx="1" fill="currentColor"/>
    <line x1="24" y1="20" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
  </svg>`,
  
  // Gas Line Icon
  gasLine: `<svg viewBox="0 0 64 64" fill="currentColor">
    <path d="M16 32 L28 32 L28 20 L36 20 L36 44 L48 44" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="16" cy="32" r="4" fill="currentColor"/>
    <circle cx="48" cy="44" r="4" fill="currentColor"/>
    <rect x="26" y="18" width="4" height="4" fill="currentColor"/>
    <rect x="34" y="42" width="4" height="4" fill="currentColor"/>
    <path d="M40 28 L44 24 M44 28 L40 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="42" cy="26" r="8" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"/>
  </svg>`,
  
  // Phone Icon
  phone: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>`,
  
  // Star Icon
  star: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>`,
  
  // Checkmark Icon
  check: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>`,
  
  // Clock Icon
  clock: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>`,
  
  // Location Icon
  location: `<svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>`,
  
  // Google Logo
  google: `<svg viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>`
};

// Helper function to get icon HTML
function getIcon(name, className = '') {
  const icon = Icons[name];
  if (!icon) return '';
  
  if (className) {
    return icon.replace('<svg', `<svg class="${className}"`);
  }
  return icon;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Icons;
}
