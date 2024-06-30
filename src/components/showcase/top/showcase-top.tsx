import { useEffect, useState, useCallback } from 'react';
import { StyledShowcaseTop, ImageContainer, SlideImage, ActionsContainer, TextContent, HeaderText, DescriptionText, StyledButton, ShopNowText, RightArrowIcon } from './showcase-top.styled';
import { SHOWCASEDATA } from '../../../DATA/SHOWCASEDATA';
import RightIconArrow from '../../../assets/images/icon-arrow.svg';
import IconAngleLeft from '../../../assets/images/icon-angle-left.svg';
import IconAngleRight from '../../../assets/images/icon-angle-right.svg';
import Button from '../../UIComponents/button/button';

function ShowcaseTop() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [imageType, setImageType] = useState<string>('');

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

    const updateImage = useCallback(() => {
        const imageData = SHOWCASEDATA[currentIndex];
        setImageType(window.innerWidth <= 375 ? imageData?.mobileImage || '' : imageData?.desktopImage || '');
    }, [currentIndex]);

    useEffect(() => {
        updateImage();

        const handleResize = () => {
            updateImage();
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleSlider('left');
            } else if (event.key === 'ArrowRight') {
                handleSlider('right');
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [updateImage, handleSlider]);

    return (
        <StyledShowcaseTop>
            <ImageContainer>
                <SlideImage
                    src={imageType}
                    alt=""
                    style={{ transition: 'transform 2s ease-in-out' }}
                />
            </ImageContainer>
            <ActionsContainer>
                <Button onClick={() => handleSlider('left')}>
                    <img src={IconAngleLeft} alt="" />
                </Button>
                <Button onClick={() => handleSlider('right')}>
                    <img src={IconAngleRight} alt="" />
                </Button>
            </ActionsContainer>
            <TextContent>
                <HeaderText>{SHOWCASEDATA[currentIndex]?.headerText}</HeaderText>
                <DescriptionText>{SHOWCASEDATA[currentIndex]?.description}</DescriptionText>
                <StyledButton>
                    <ShopNowText>Shop Now</ShopNowText>
                    <RightArrowIcon src={RightIconArrow} alt="" />
                </StyledButton>
            </TextContent>
        </StyledShowcaseTop>
    );
}

export default ShowcaseTop;
