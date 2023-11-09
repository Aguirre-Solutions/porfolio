import React, { useState } from 'react';
import { Box } from "@mui/material";
import CarouselModal from '../carousel-modal/carousel-modal.component';
import { StyledCaption } from '../../utils/styledComponents';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const CarouselImage = ({ image, checks, images, theme }) => {
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
          position: 'relative',
          '&:hover': {
            '& .hover-icon': {
              opacity: 1 // Show the icon on hover
            }
          }
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
        <Box
          className="hover-icon"
          sx={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            opacity: 0, // Initially hidden
            transition: 'opacity 0.3s ease-in-out',
            // Ensure the icon is clickable and receives pointer events
            pointerEvents: 'none',
          }}
        >
          <ZoomOutMapIcon style={{ fontSize: '3rem', color: theme.palette.primary.main }} />
        </Box>
        <StyledCaption mt={2} gutterBottom sx={{ overflow: 'auto', paddingX: '4px', paddingTop: '20px' }}>
          {image.description}
        </StyledCaption>
      </Box>

      <CarouselModal
        theme={theme}
        open={open}
        handleClose={handleClose}
        images={images}
        initialSlide={initialSlide}
      />

    </>
  );
};

export default CarouselImage;
