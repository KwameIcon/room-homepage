import ShowcaseButtom from "./bottom/Showcase-buttom";
import { StyledShowcase } from "./showcase.styled";
import ShowcaseTop from "./top/showcase-top";

function Showase() {
  return (
    <StyledShowcase>
        <ShowcaseTop/>
        <ShowcaseButtom/>
    </StyledShowcase>
  )
}

export default Showase;
