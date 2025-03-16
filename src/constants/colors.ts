// Brand Colors
export const colors = {
  brand: {
    primary: {
      50: '#f0f7ff',   // Lightest - Background, hover states
      100: '#e0effe',  // Light - Selected items background
      200: '#bae0fd',  // Input borders, dividers
      300: '#7cc5fb',  // Icons, secondary buttons
      400: '#36a9f8',  // Links, interactive elements
      500: '#0c92e5',  // Primary buttons, main actions
      600: '#0270c3',  // Primary button hover
      700: '#025698',  // Darker accents
      800: '#01407a',  // Very dark accents
      900: '#002952'   // Darkest - Text on light backgrounds
    },
    secondary: {
      50: '#f8fafc',   // Page backgrounds
      100: '#f1f5f9',  // Card backgrounds
      200: '#e2e8f0',  // Borders, dividers
      300: '#cbd5e1',  // Disabled states
      400: '#94a3b8',  // Placeholder text
      500: '#64748b',  // Secondary text
      600: '#475569',  // Primary text
      700: '#334155',  // Headings
      800: '#1e293b',  // Dark text
      900: '#0f172a'   // Darkest text
    }
  },
  semantic: {
    success: {
      light: '#ecfdf5',
      default: '#10b981',
      dark: '#059669'
    },
    warning: {
      light: '#fffbeb',
      default: '#f59e0b',
      dark: '#d97706'
    },
    error: {
      light: '#fef2f2',
      default: '#ef4444',
      dark: '#dc2626'
    },
    info: {
      light: '#eff6ff',
      default: '#3b82f6',
      dark: '#2563eb'
    }
  },
  common: {
    white: '#ffffff',
    black: '#000000',
    transparent: 'transparent'
  }
} as const;

// Utility function to get Tailwind classes for common use cases
export const getColorClasses = {
  // Backgrounds
  bg: {
    primary: 'bg-brand-primary-500',
    primaryHover: 'hover:bg-brand-primary-600',
    secondary: 'bg-brand-secondary-100',
    secondaryHover: 'hover:bg-brand-secondary-200',
    success: 'bg-semantic-success-default',
    error: 'bg-semantic-error-default',
    warning: 'bg-semantic-warning-default',
    info: 'bg-semantic-info-default',
    white: 'bg-white'
  },
  // Text colors
  text: {
    primary: 'text-brand-secondary-700',
    secondary: 'text-brand-secondary-500',
    light: 'text-brand-secondary-400',
    white: 'text-white',
    link: 'text-brand-primary-500 hover:text-brand-primary-600',
    success: 'text-semantic-success-default',
    error: 'text-semantic-error-default',
    warning: 'text-semantic-warning-default',
    info: 'text-semantic-info-default'
  },
  // Borders
  border: {
    primary: 'border-brand-primary-200',
    secondary: 'border-brand-secondary-200',
    focus: 'focus:border-brand-primary-500 focus:ring-brand-primary-500'
  }
} as const; 