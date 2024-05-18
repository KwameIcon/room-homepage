// Importing the styled component for ShowcaseBottom
import { StyledShowcaseBottom } from "./Showcase-buttom.styled";

// Importing images for the showcase
import ImageAboutDarkness from '../../../assets/images/image-about-dark.jpg';
import ImageAboutLight from '../../../assets/images/image-about-light.jpg';

// ShowcaseBottom component definition
function ShowcaseButtom() {
  return (
    // Styled component for the bottom showcase section
    <StyledShowcaseBottom>
        {/* Section for showcasing about darkness content */}
        <div className="about-darkness">
            <img src= {ImageAboutDarkness} alt="about darkness" /> {/* Image displaying about darkness */}
        </div>
        
        {/* Section for furniture information */}
        <div className="furniture-info">
            <div>
                <h6>About our furniture</h6> {/* Heading for furniture information */}
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your dream space
                </p> {/* Paragraph describing about the furniture */}
            </div>
        </div>
        
        {/* Section for showcasing about light content*/}
        <div className="about-light">
            <img src= {ImageAboutLight} alt="about light" /> {/* Image displaying about light */}
        </div>
    </StyledShowcaseBottom>
  );
}

// Exporting ShowcaseBottom component as default
export default ShowcaseButtom;
