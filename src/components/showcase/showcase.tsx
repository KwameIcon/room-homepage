import ShowcaseButtom from "./bottom/Showcase-buttom";
import { StyledShowcase } from "./showcase.styled";
import ShowcaseTop from "./top/showcase-top";

function Showase() {
  return (
    <StyledShowcase>
      <div className="showcase-top">
        <ShowcaseTop/>
      </div>
      <div className="showcase-bottom">
        <ShowcaseButtom/>
      </div>
    </StyledShowcase>
  )
}

export default Showase;
