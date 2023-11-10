import React, { useState, useEffect, useRef } from 'react';
import { Box } from "@mui/material";
import CarouselModal from '../carousel-modal/carousel-modal.component';
import { StyledCaption } from '../../utils/styledComponents';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

const CarouselImage = ({ image, checks, images, theme }) => {
  const captionRef = useRef(null);
  // State to manage the alignment style
  const [captionAlignment, setCaptionAlignment] = useState('center');
  
  //state to manage modal open/close
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialSlide = images.findIndex(img => img.link === image.link);

    // Effect hook to adjust alignment based on content height
    useEffect(() => {
        if (captionRef.current) {
          // Compare scrollHeight to offsetHeight to determine if the text is overflowing
          const isOverflowing = captionRef.current.scrollHeight > captionRef.current.offsetHeight;
          setCaptionAlignment(isOverflowing ? 'flex-start' : 'center');
        }
      }, [image.description]); // Dependency array ensures this runs when image.description changes
    

  const { isMobile, isTablet, isLaptop } = checks;

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '100%',
            height: '300px',
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
        <StyledCaption 
            sx={{
                overflow: 'auto',
                height: '20vh', 
                paddingX: isMobile ? '20px' : '40px',
                paddingY: '0px', 
                mt: 2,
                fontSize: '20px',
                lineHeight: 'normal', // Adjust line height to ensure it doesn't cause overflow issues
                display: 'block',
                flexDirection: 'column',
                alignItems: captionAlignment,
                textAlign: 'center',
            }}
            >
            {image.description}
            </StyledCaption>

      </Box>

      <CarouselModal
        checks={checks}
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
