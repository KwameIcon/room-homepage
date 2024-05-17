// App.js
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global styles/GlobalStyles";
import theme from "./theme/Theme";
import Homepage from "./components/pages/homepage";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// creating browser routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
