import { StyledShowcaseBottom } from "./Showcase-buttom.styled"
import ImageAboutDarknes from '../../../assets/images/image-about-dark.jpg'
import ImageAboutLight from '../../../assets/images/image-about-light.jpg'

function ShowcaseButtom() {
  return (
    <StyledShowcaseBottom>
        <div className="about-darkness">
            <img src= {ImageAboutDarknes} alt="about darkness" />
        </div>
        <div className="furniture-info">
            <div>
                <h6>About our furniture</h6>
                <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space</p>
            </div>
        </div>
        <div className="about-light">
            <img src= {ImageAboutLight} alt="about light" />
        </div>
    </StyledShowcaseBottom>
  )
}

export default ShowcaseButtom