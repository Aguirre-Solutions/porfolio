import React from 'react';
import { Card, CardContent, CardMedia, Box, Chip, Tooltip, Link } from "@mui/material";
import { StyledTypography, StyledIconButton } from '../../utils/styledComponents';
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
            <CardContent sx={{paddingBottom:'5px !important'}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <StyledTypography gutterBottom variant="h5" component="h2">
                        {title}
                    </StyledTypography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {link && (
                            <Tooltip title={link}> 
                                <StyledIconButton 
                                    component={Link}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ padding: '2px' }}
                                    >
                                    <LanguageIcon />
                                </StyledIconButton>
                            </Tooltip>
                        )}
                        {githubLink && (
                            <Tooltip title={githubLink}>
                                <StyledIconButton 
                                    component={Link}
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ padding: '2px' }}
                                    >
                                    <GitHubIcon />
                                </StyledIconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>
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
                            sx={{ margin: '2px', marginY: '5px', padding: '2px' }} 
                        />
                    ))}
                </Box>
                <Box>
                    <StyledTypography> 
                        'READ MORE ABOUT THIS PROJECT'
                    </StyledTypography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
