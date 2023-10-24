import React from 'react';
import { Card, CardContent, CardMedia, Box, Chip } from "@mui/material";
import { StyledTypography } from '../../utils/styledComponents';


const PortfolioItem = ({ image, title, description, technologies, checks, theme }) => {

    const {isMobile, isTablet, isLaptop, isDesktop} = checks;

    return (
        <Card>
            <CardMedia
                sx={{ height: 0, paddingTop: '56.25%' }}
                image={image}
                title={title}
            />
            <CardContent>
                <StyledTypography gutterBottom variant="h5" component="h2">
                    {title}
                </StyledTypography>
                <StyledTypography variant="body2" color="textSecondary" component="p">
                    {description}
                </StyledTypography>
                <Box 
                    sx={{ 
                        marginTop: '10px', 
                        display: 'flex', 
                        justifyContent: isMobile ? 'center' : 'flex-start', 
                        flexWrap: 'wrap',
                        alignContent: isMobile ? 'center' : 'flex-start',
                        flexDirection: 'row',  // Stacking chips vertically for mobile
                        gap: 0  // Adjusting gap based on device type
                    }}>
                    {technologies.map((tech, idx) => (
                        <Chip 
                            key={idx}
                            icon={tech.icon} 
                            label={tech.name} 
                            variant="outlined" 
                            sx={{ margin: '2px', padding: '2px' }} 
                        />
                    ))}
                </Box>



            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
