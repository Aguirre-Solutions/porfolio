import React from 'react';
import { Box, Modal } from "@mui/material";
import Slider from "react-slick";
import { StyledCaption } from '../../utils/styledComponents';
import {PrevArrow, NextArrow} from '../carousel-ui/carousel-ui.component';



const CarouselModal = ({ theme, images, open, handleClose, initialSlide}) => {

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
    console.log(theme)


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
          width: '80%',
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
                maxHeight: '90vh',

              }}>
                <img 
                  src={img.link} 
                  alt={img.description} 
                  style={{ 
                    width: '100%',
                    maxHeight: '70vh',
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }} 
                />
                <StyledCaption sx={{overflow: 'auto', maxHeight:'20vh', paddingX:'4px', mt: 2, fontSize:'25px'}}>
                  {img.description}
                </StyledCaption>
              </Box>
            ))}
          </Slider>
        </Box>
      </Modal>
  );
};

export default CarouselModal;

