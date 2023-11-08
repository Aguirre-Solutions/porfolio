import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

import { Box  } from '@mui/material';
import {PrevArrow, NextArrow} from '../carousel-ui/carousel-ui.component';

import CarouselImage from '../carousel-image/carousel-image.component';


const ProjectImageCarousel = ({images})=> {

    
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    className: 'highlight-slider',
    nextArrow: <NextArrow size="20px"/>,
    prevArrow: <PrevArrow size="20px"/>,
  };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <Box key={index}>
                    <CarouselImage image={image} />                    
                </Box>
            ))} 
        </Slider>
    )
}

export default ProjectImageCarousel;