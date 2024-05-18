// Importing necessary components and styled component
import Header from "../header/header";
import Showcase from "../showcase/showcase";
import { StyledHomepage } from "./homepage.styled";

// Homepage component definition
function Homepage() {
  return (
    // Styled component for the homepage layout
    <StyledHomepage>
      {/* Including the Header component */}
      <Header/>
      {/* Including the Showcase component */}
      <Showcase/> {/* Corrected the typo in the component name */}
    </StyledHomepage>
  );
}

// Exporting the Homepage component as default
export default Homepage;
