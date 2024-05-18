// Define the theme object with colors and typography settings
const theme = {
  // Colors used throughout the application
  colors: {
    darkGray: "hsl(0, 0%, 63%)", // Define dark gray color
    black: "hsl(0, 0%, 0%)", // Define black color
    white: "hsl(0, 0%, 100%)", // Define white color
    veryDarkGray: "hsl(0, 0%, 27%)" // Define very dark gray color
  },
  // Typography settings for fonts
  typography: {
    // Define default font family
    fontFamily: "'League Spartan', sans-serif",
    // Define font weight variations
    fontWeight: {
      regular: 500, // Regular font weight
      medium: 600, // Medium font weight
      bold: 700 // Bold font weight
    }
  }
};

// Export the theme object
export default theme;
