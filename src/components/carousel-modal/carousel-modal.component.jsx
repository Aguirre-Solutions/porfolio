import React from 'react';
import { Box, Modal } from "@mui/material";
import Slider from "react-slick";
import { StyledCaption } from '../../utils/styledComponents';
import {PrevArrow, NextArrow} from '../carousel-ui/carousel-ui.component';



const CarouselModal = ({ theme, images, open, handleClose, initialSlide, checks}) => {

    const { isMobile, isTablet } = checks;

    const sliderSettings = {
        initialSlide: initialSlide,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'highlight-slider',
        nextArrow: <NextArrow size="20px" />,
        prevArrow: <PrevArrow size="20px" />,

        
    };


    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '100%' : '80%',
          outline:'none !important',
          borderRadius:'35px',
          bgcolor: theme.palette.additional.lightPastelPink,
          boxShadow: 24,
          p: 4,
          overflowY: 'none',
        }}>
          <Slider {...sliderSettings}>
            {images.map((img, index) => (
              <Box key={index} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
                height: '90vh',

              }}>
                <img 
                  src={img.link} 
                  alt={img.description} 
                  style={{ 
                    width: '100%',
                    height: '70vh',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }} 
                />
                <Box mb={2}>
                  <StyledCaption sx={{overflow: 'auto', height:'20vh', paddingX: isMobile ? '20px' : '40px', mt: 2, fontSize:'25px',  alignItems: isTablet || isMobile ? 'flex-start' : 'center'}}>
                    {img.description} <br></br>
                  </StyledCaption>
                </Box>
                  
              </Box>
            ))}
          </Slider>
        </Box>
      </Modal>
  );
};

export default CarouselModal;

