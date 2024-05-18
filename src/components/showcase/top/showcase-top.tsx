import { useEffect, useState, useCallback } from 'react';
import { StyledShowcaseTop } from './showcase-top.styled';
import { SHOWCASEDATA } from '../../../DATA/SHOWCASEDATA';
import RightIconArrow from '../../../assets/images/icon-arrow.svg';
import IconAngleLeft from '../../../assets/images/icon-angle-left.svg';
import IconAngleRight from '../../../assets/images/icon-angle-right.svg';
import Button from '../../UIComponents/button/button';

function ShowcaseTop() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [imageType, setImageType] = useState<string>('');

    // Function to handle slider navigation
    const handleSlider = useCallback((direction: 'left' | 'right') => {
        const dataLength = SHOWCASEDATA.length - 1;
        setCurrentIndex(prev => {
            if (direction === 'left') {
                return prev === 0 ? dataLength : prev - 1;
            } else {
                return prev === dataLength ? 0 : prev + 1;
            }
        });
    }, []);

    // Function to update the image type based on window width
    const updateImage = useCallback(() => {
        const imageData = SHOWCASEDATA[currentIndex];
        setImageType(window.innerWidth <= 375 ? imageData?.mobileImage || '' : imageData?.desktopImage || '');
    }, [currentIndex]);

    useEffect(() => {
        updateImage(); // Call updateImage on component mount and currentIndex change

        const handleResize = () => {
            updateImage(); // Call updateImage on window resize
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleSlider('left'); // Handle left arrow key press
            } else if (event.key === 'ArrowRight') {
                handleSlider('right'); // Handle right arrow key press
            }
        };

        // Add event listeners for window resize and keydown events
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [updateImage, handleSlider]); // Re-run effect when updateImage or handleSlider changes


    // JSX to render the ShowcaseTop component
    return (
        <StyledShowcaseTop>
            {/* Container for image */}
            <div className="image-container">
                {/* Image element */}
                <img
                    src={imageType}
                    alt=""
                    style={{ transition: 'transform 2s ease-in-out' }} // CSS transition for smooth animation
                />
            </div>
            {/* Container for navigation buttons */}
            <div className="actions">
                {/* Button to navigate left */}
                <Button onClick={() => handleSlider('left')}>
                    <img src={IconAngleLeft} alt="" />
                </Button>
                {/* Button to navigate right */}
                <Button onClick={() => handleSlider('right')}>
                    <img src={IconAngleRight} alt="" />
                </Button>
            </div>
            {/* Container for text content */}
            <div className="text-content">
                {/* Header */}
                <h3>{SHOWCASEDATA[currentIndex]?.headerText}</h3>
                {/* Description */}
                <p>{SHOWCASEDATA[currentIndex]?.description}</p>
                {/* Button for shop action */}
                <button>
                    {/* Text */}
                    <span>Shop Now</span>
                    {/* Arrow icon */}
                    <img src={RightIconArrow} alt="" />
                </button>
            </div>
        </StyledShowcaseTop>
    );
}

// Export the ShowcaseTop component
export default ShowcaseTop;
