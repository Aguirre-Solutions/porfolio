import {useState} from 'react';
import { Box, Grid, Chip, Stack } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider, StyledHighlightChip } from '../../utils/styledComponents';

const ProjectDetailed = ({ project, checks, }) => {

    const [selectedHighlight, setSelectedHighlight] = useState(null)
    
    const {
        highlights
    } = project;

    const { isMobile, isTablet, isLaptop, isDesktop } = checks;

    const highlightKeys = Object.keys(highlights);

    const handleChipClick = (key) => {
        setSelectedHighlight(highlights[key])
    }

    return (
        <Grid container spacing={3} sx={{marginBottom:'200px'}} >


            <Grid item xs={12} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
            </Grid>
    
            
            <Grid item xs={12}>
                <StyledTypography variant='h4' sx={{textAlign:'Center'}}>
                    Highlights
                </StyledTypography>
            </Grid>
            
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
                    {highlightKeys.map((key, index) => (
                    <StyledHighlightChip 
                    key={index} 
                    label={key}
                    onClick={() => handleChipClick(key)}
                    />
                    ))}
                </Box>
            </Grid>

            {selectedHighlight && (
            <Grid container item xs={12} md={12} spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <img src={selectedHighlight.image} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <StyledTypography style={{ textAlign: 'center' }}>{selectedHighlight.description}</StyledTypography>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <img src={selectedHighlight.codeImage} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </Grid>
            </Grid>

            )}


          
        </Grid>
    );
};

export default ProjectDetailed;
