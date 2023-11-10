import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider, StyledHighlightChip } from '../../utils/styledComponents';

import ProjectImageCarousel from '../project-image-carousel/project-image-carousel.component';

const ProjectDetailed = ({ project, checks, theme }) => {

    
    // Destructure the highlights object from the project prop
    const { highlights } = project;

    // Destructure the checks object to determine the device type
    const { isMobile, isTablet, isLaptop, isDesktop } = checks;


    // Get the keys of the highlights object
    const highlightKeys = Object.keys(highlights);

    // Initialize the selectedHighlight state with the first highlight
    const [selectedHighlight, setSelectedHighlight] = useState(highlights[highlightKeys[0]]);

    // Function to handle the click event of a highlight chip
    const handleChipClick = (key) => {
        setSelectedHighlight(highlights[key]);
    }

    console.log(theme)

    return (
        <Grid 
        container 
        spacing={3} 
        sx={{
            margin: 'auto',
            marginBottom:'20px',
            padding: isMobile ? '0' : '0 20px',
            }} >

            {/* Title */}
            <Grid item xs={12}>
                <StyledTypography variant='h4' sx={{textAlign:'Center'}}>
                    Highlights
                </StyledTypography>
            </Grid>
            
            {/* Highlight chips */}
            <Grid item xs={12} md={6} lg={6} display='flex' justifyContent='space-around' sx={{mx:'auto'}}>
                <Box 
                    sx={{ 
                        marginTop: '10px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        flexWrap:  isMobile || isTablet ? 'wrap' : 'nowrap',
                        alignContent: 'center',
                        flexDirection: 'row',
                        gap: 0
                    }}>
                    {highlightKeys.map((key, index) => {
                        // Determine if this chip is the selected one
                        const isSelected = selectedHighlight === highlights[key];
                        
                        return (
                            <StyledHighlightChip 
                                key={index} 
                                label={key}
                                onClick={() => handleChipClick(key)}
                                // Apply the background color only to the selected chip
                                sx={{
                                    backgroundColor: isSelected ? theme.palette.additional.deepPurple : '',
                                    color: isSelected ? 'white' : ''
                                }}
                            />
                        );
                    })}
                </Box>
            </Grid>

            {/* Selected highlight */}
            {selectedHighlight && (
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '50px', marginBottom:'50px' }}>
                
                {/* Display the description */}
                <Grid item xs={12} sx={{ marginBottom: '20px' }}>
                <StyledTypography sx={{textAlign: 'center'}}>{selectedHighlight.description}</StyledTypography>
                </Grid>

                {/* Conditionally render the image carousel for images or codeImages, but only display one if only one type is available */}
                {((selectedHighlight.images && selectedHighlight.images.length > 0) || (selectedHighlight.codeImages && selectedHighlight.codeImages.length > 0)) && (
                <Grid item xs={12} md={6} >
                    <ProjectImageCarousel images={selectedHighlight.images && selectedHighlight.images.length > 0 ? selectedHighlight.images : selectedHighlight.codeImages} checks={checks}theme={theme}/>
                </Grid>
                )}

                {/* Render the second carousel for codeImages if both images and codeImages are available */}
                {selectedHighlight.images && selectedHighlight.images.length > 0 && selectedHighlight.codeImages && selectedHighlight.codeImages.length > 0 && (
                <Grid item xs={12} md={6}>
                    <ProjectImageCarousel images={selectedHighlight.codeImages} checks={checks} theme={theme}/>
                </Grid>
                )}
            </Grid>
            )}
          
        </Grid>
    );
};

export default ProjectDetailed;

/* This component displays the highlights of a project and allows the user to select a highlight to view more details. */