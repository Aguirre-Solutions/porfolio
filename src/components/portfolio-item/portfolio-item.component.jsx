import React from 'react';
import { Card, CardContent, CardMedia, Box, Chip, IconButton, Link } from "@mui/material";
import { StyledTypography } from '../../utils/styledComponents';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';  // Globe icon

const PortfolioItem = ({ image, title, description, technologies, checks, theme, link, githubLink }) => {
    


    const {isMobile, isTablet, isLaptop, isDesktop} = checks;

    return (
        <Card elevation={0}>
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
                <StyledTypography> Technologies: </StyledTypography>
                <Box 
                    sx={{ 
                        marginTop: '10px', 
                        display: 'flex', 
                        justifyContent: isMobile ? 'center' : 'flex-start', 
                        flexWrap: 'wrap',
                        alignContent: isMobile ? 'center' : 'flex-start',
                        flexDirection: 'row',
                        gap: 0
                    }}>
                    {technologies.map((tech, idx) => (
                        <Chip 
                            key={idx}
                            icon={tech.icon} 
                            label={tech.name} 
                            variant="filled" 
                            color= 'secondary'
                            sx={{ margin: '2px', padding: '2px' }} 
                        />
                    ))}
                </Box>
                <Box sx={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                    {link && (
                        <IconButton 
                            component={Link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LanguageIcon />
                        </IconButton>
                    )}
                    {githubLink && (
                        <IconButton 
                            component={Link}
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
