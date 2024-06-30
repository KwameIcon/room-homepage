// Importing the styled component for ShowcaseBottom
import { StyledShowcaseBottom, AboutDarknessContainer, AboutDarknessImage, FurnitureInfoContainer, FurnitureInfoContent, FurnitureInfoContainerHeader, FurnitureInfoMessage, AboutLightContainer, AboutLightImage } from "./Showcase-buttom.styled";

// Importing images for the showcase
import ImageAboutDarkness from '../../../assets/images/image-about-dark.jpg';
import ImageAboutLight from '../../../assets/images/image-about-light.jpg';

// ShowcaseBottom component definition
function ShowcaseBottom() {
    return (
        <StyledShowcaseBottom>
            {/* Section for showcasing about darkness content */}
            <AboutDarknessContainer className="about-darkness">
                <AboutDarknessImage src={ImageAboutDarkness} alt="about darkness" />
            </AboutDarknessContainer>

            {/* Section for furniture information */}
            <FurnitureInfoContainer className="furniture-info">
                <FurnitureInfoContent>
                    <FurnitureInfoContainerHeader>About our furniture</FurnitureInfoContainerHeader>
                    <FurnitureInfoMessage>
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best expresses your interests and what inspires you.
                        Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                        Product specialists are available to help you create your dream space.
                    </FurnitureInfoMessage>
                </FurnitureInfoContent>
            </FurnitureInfoContainer>

            {/* Section for showcasing about light content */}
            <AboutLightContainer className="about-light">
                <AboutLightImage src={ImageAboutLight} alt="about light" />
            </AboutLightContainer>
        </StyledShowcaseBottom>
    );
}

export default ShowcaseBottom;