import {useState} from 'react';
import { Box, Grid, Chip, Stack } from '@mui/material';
import { StyledTypography, StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents';

const ProjectDetailed = ({ project, checks, }) => {

    const [selectedHighlight, setSelectedHighlight] = useState(null)
    
    const {
        title,
        description,
        technologyStack,
        setup,
        usage,
        contributions,
        highlights
    } = project;

    const { isMobile, isTablet, isLaptop, isDesktop } = checks;

    const highlightKeys = Object.keys(highlights);

    const handleChipClick = (key) => {
        setSelectedHighlight(highlights[key])
    }

    return (
        <Box component={Grid} container spacing={3} mb={6}>


            <Box item xs={12} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
             </Box>
    
            
            <Box component={Grid} item xs={12}>
                <StyledTypography variant='h4' sx={{textAlign:'Center'}}>
                    Highlights
                </StyledTypography>
            </Box>
            
            <Box component={Grid} item xs={12} md={6} display='flex' justifyContent='space-between' sx={{width:'50%', margin:'0 auto'}}>
                {highlightKeys.map((key, index) => (
                    <Chip 
                    key={index} 
                    label={key}
                    onClick={() => handleChipClick(key)}
                    />
                ))}

            </Box>

            {selectedHighlight && (
            <Grid container item xs={12} md={12} spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <img src={selectedHighlight.image} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <p style={{ textAlign: 'center' }}>{selectedHighlight.description}</p>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <img src={selectedHighlight.codeImage} style={{ maxWidth: '100%', maxHeight: '200px' }} />
                </Grid>
            </Grid>

            )}


          
        </Box>
    );
};

export default ProjectDetailed;
