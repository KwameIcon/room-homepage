import { StyledShowcaseTop } from './showcase-top.styled';
import { SHOWCASEDATA } from '../../../DATA/SHOWCASEDATA';
import { useEffect, useState } from 'react';
import RightIconArrow from '../../../assets/images/icon-arrow.svg';
import IconAngleLeft from '../../../assets/images/icon-angle-left.svg';
import IconAngleRight from '../../../assets/images/icon-angle-right.svg';
import Button from '../../UIComponents/button/button';

function ShowcaseTop() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<string>(SHOWCASEDATA[currentIndex].desktopImage);

    
    

    const handleSlider = (direction: 'left' | 'right') => {
        const dataLength = SHOWCASEDATA.length - 1;
        if (direction === 'left') {
            setCurrentIndex((prev) => (prev === 0 ? dataLength : prev - 1));
        } else if (direction === 'right') {
            setCurrentIndex((prev) => (prev === dataLength ? 0 : prev + 1));
        }
    };

    useEffect(() =>{

        const updateImage = () =>{
            if(window.innerWidth <= 375){
                setCurrentImage(SHOWCASEDATA[currentIndex].mobileImage)
            }else{
                setCurrentImage(SHOWCASEDATA[currentIndex].desktopImage);
            }
        }

        updateImage();

        window.addEventListener('resize', updateImage);


        return(() =>{
            window.removeEventListener('resize', updateImage);
        })

    }, [currentIndex])

    return (
        <StyledShowcaseTop>
            <div className="image-container">
                <img
                    src={currentImage}
                    alt="" />
            </div>
            <div className="actions">
                <Button onClick={() => handleSlider('left')}>
                    <img src={IconAngleLeft} alt="" />
                </Button>
                <Button onClick={() => handleSlider('right')}>
                    <img src={IconAngleRight} alt="" />
                </Button>
            </div>
            <div className="text-content">
                <h3>{SHOWCASEDATA[currentIndex].headerText}</h3>
                <p>{SHOWCASEDATA[currentIndex].description}</p>
                <button>
                    <span>Shop Now</span>
                    <img src={RightIconArrow} alt="" />
                </button>
            </div>
        </StyledShowcaseTop>
    );
}

export default ShowcaseTop;
