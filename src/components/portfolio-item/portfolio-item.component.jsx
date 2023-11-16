import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Box, Chip, Tooltip, Link } from "@mui/material";
import { StyledTypography, StyledIconButton, StyledButton, StyledChip } from '../../utils/styledComponents';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';  


const PortfolioItem = ({ project, checks, technologyIcons }) => {
    
    const navigate = useNavigate();
    const {image, title, shortDescription, highlightedTechnologies, link, githubLink, id} = project;
    const {isMobile, isTablet} = checks;
    

    const goToProject = (id) => {
        navigate(`/Project/${id}`);
    }

    const getIcon = (tech) => {
        return technologyIcons[tech];
    }

    return (
        <Card elevation={0} sx={{ 
            backgroundColor:'#efefef', 
            height: '680px', // Fixed height
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around' // Aligns items vertically
        }}>
            <CardMedia
                sx={{ height: 0, paddingTop: '56.25%' }}
                image={image}
                title={title}
            />
            <CardContent sx={{ 
                    flexGrow: 1, // Allows content to fill the space
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between' // Aligns inner content
                }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <StyledTypography gutterBottom variant="h5" component="h2" sx={{fontWeight:600}}>
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
                <StyledTypography variant="body2" color="textSecondary" component="p" >
                    {shortDescription}
                </StyledTypography>
                <StyledTypography sx={{fontWeight: 500}}> Technologies: </StyledTypography>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        justifyContent: isMobile || isTablet ? 'center' : 'flex-start', 
                        flexWrap: 'wrap',
                        alignContent: isMobile || isTablet ? 'center' : 'flex-start',
                        flexDirection: 'row',
                        gap: 0
                    }}>
                    {highlightedTechnologies.map((tech, idx) => (
                        <StyledChip 
                            key={idx}
                            icon={getIcon(tech)} 
                            label={tech} 
                            variant="filled" 
                            color= 'secondary'
                            sx={{ margin: '2px', marginY: '5px', padding: '2px' }} 
                        />
                    ))}
                </Box>
                <Box sx={{ my: 2 }}>
                <StyledButton
                    variant="filled"
                    color="primary"
                    component={Link}
                    onClick={() => {goToProject(id)}} 
                    fullWidth
                >
                    READ MORE
                </StyledButton>

                </Box>
            </CardContent>
        </Card>
    );
}

export default PortfolioItem;
