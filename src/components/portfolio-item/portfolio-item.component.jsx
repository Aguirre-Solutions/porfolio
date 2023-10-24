import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import { StyledTypography } from '../../utils/styledComponents';


const PortfolioItem = ({ image, title, description, technologies, checks, theme }) => {

    const [isMobile, isTablet, isLaptop, isDesktop] = checks;

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
                <div style={{ marginTop: '10px' }}>
                    {technologies.map((tech, idx) => (
                        <Chip 
                            key={idx}
                            icon={tech.icon} 
                            label={tech.name} 
                            variant="outlined" 
                            style={{ margin: '5px' }} 
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
