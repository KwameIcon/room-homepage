// Homepage.js
import Header from "../header/header";
import Showase from "../showcase/showcase";
import { StyledHomepage } from "./homepage.styled"

function Homepage() {
  return (
    <StyledHomepage>
      <Header/>
      <Showase/>
    </StyledHomepage>
  )
}

export default Homepage;
