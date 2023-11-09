import React, { useState } from 'react';
import { Box, } from "@mui/material";
import CarouselModal  from '../carousel-modal/carousel-modal.component';   
import { StyledCaption } from '../../utils/styledComponents';

const CarouselImage = ({ image, checks, images }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialSlide = images.findIndex(img => img.link === image.link);



  return (
    <>
      <Box 
        sx={{
          height: '500px',
          display: 'flex',
          marginX: checks.isTablet ? '20px' : 0, 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={handleOpen}
      >
        <img 
          src={image.link} 
          alt={image.description} 
          style={{ 
            maxWidth: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
            borderRadius: '10px',
            margin: 'auto'
          }} 
        />
        <StyledCaption mt={2} gutterBottom sx={{overflow:'auto', paddingX:'4px', paddingTop:'20px'}}>
          {image.description}
        </StyledCaption>
      </Box>

      <CarouselModal
        open={open}
        handleClose={handleClose}
        images={images}
        initialSlide={initialSlide}
      />
      
    </>
  );
};

export default CarouselImage;
