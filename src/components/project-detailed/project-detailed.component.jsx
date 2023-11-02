import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider, StyledHighlightChip } from '../../utils/styledComponents';

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

    return (
        <Grid container spacing={3} sx={{marginBottom:'200px'}} >
            {/* Horizontal divider */}
            <Grid item xs={12} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
            </Grid>
    
            {/* Title */}
            <Grid item xs={12}>
                <StyledTypography variant='h4' sx={{textAlign:'Center'}}>
                    Highlights
                </StyledTypography>
            </Grid>
            
            {/* Highlight chips */}
            <Grid item xs={12} md={6} display='flex' justifyContent='space-around' sx={{margin:'0 auto'}}>
                <Box 
                    sx={{ 
                        marginTop: '10px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        flexWrap: isMobile ? 'wrap' : 'nowrap',
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
            {/* Selected highlight */}
            {selectedHighlight && (
                <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{marginTop:'50px'}}>
                    {/* Display the first image and its description */}
                    <Box component={Grid} item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
                        <img src={selectedHighlight.image[0].link} alt={selectedHighlight.image[0].description} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        <StyledTypography style={{ textAlign: 'center' }}>{selectedHighlight.image[0].description}</StyledTypography>
                    </Box>

                    {/* Display the description */}
                    <Grid item xs={12} md={4}>
                        <StyledTypography style={{ textAlign: 'center' }}>{selectedHighlight.description}</StyledTypography>
                    </Grid>

                    {/* Display the first code image and its description */}
                    <Box component={Grid} item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
                        <img src={selectedHighlight.codeImage[0].link} alt={selectedHighlight.codeImage[0].description} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                        <StyledTypography style={{ textAlign: 'center' }}>{selectedHighlight.codeImage[0].description}</StyledTypography>
                    </Box>
                </Grid>
            )}




          
        </Grid>
    );
};

export default ProjectDetailed;

/* This component displays the highlights of a project and allows the user to select a highlight to view more details. */