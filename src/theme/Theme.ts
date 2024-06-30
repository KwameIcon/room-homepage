// Defining the theme object with colors and typography settings
const theme = {
  // Colors used throughout the application
  colors: {
    darkGray: "hsl(0, 0%, 63%)",
    black: "hsl(0, 0%, 0%)", 
    white: "hsl(0, 0%, 100%)", 
    veryDarkGray: "hsl(0, 0%, 27%)" 
  },
  // Typography settings for fonts
  typography: {
    // Define default font family
    fontFamily: "'League Spartan', sans-serif",
    // Define font weight variations
    fontWeight: {
      regular: 500, 
      medium: 600, 
      bold: 700 
    }
  }
};

// Export the theme object
export default theme;
