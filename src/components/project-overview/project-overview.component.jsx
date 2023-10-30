import {  Box, Chip, Grid } from '@mui/material'
import { StyledTypography, StyledLink, StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents'


const ProjectOverview = ({ project, technologyIcons, checks, theme }) => {

    const { isMobile, isTablet } = checks;
    const { title, image, link, githubLink, highlightedTechnologies, description, techStack, highlights } = project

    const getIcon = (tech) => {
        return technologyIcons[tech];
    }

    return (
        <Box container component={Grid} spacing={3} alignItems="center">
            {/* Left Side - Image */}
            <Box item xs={12} md={6} component={Grid}>
                <img src={image} alt={title} style={{ width: '100%' }} />
            </Box>
           
            {isMobile ? 
            <Box item xs={12} md={1} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks} />
             </Box>
            :
            <Box item xs={false} md={1} component={Grid} ml={isTablet ? 3 : 0} display="flex" justifyContent="center" alignItems="center">
                <StyledVerticalDivider checks={checks} />
            </Box>
            }
    
            {/* Right Side */}
            <Box item xs={12} md={5} component={Grid}>
                {/* Title */}
                <StyledTypography variant="h3">{title}</StyledTypography>
                
                {/* Links */}
                <Box sx={{ padding: '10px', margin: '5px 0' }}>
                    <StyledTypography sx={{fontWeight:'500'}}>
                        Web Page:  
                        <StyledLink href={link} sx={{color:theme.palette.primary.main, fontWeight: 900, marginLeft:'0.5em'}}>{link}</StyledLink>
                    </StyledTypography>
                </Box>
                <Box sx={{ padding: '10px', margin: '5px 0' }}>
                    <StyledTypography sx={{fontWeight:'500'}}>
                        Github: 
                        <StyledLink href={githubLink} sx={{color:theme.palette.primary.main, fontWeight: 900, marginLeft:'0.5em'}}>{githubLink}</StyledLink>
                    </StyledTypography>
                </Box>

                {/* Tech Stack */}
                <StyledTypography variant='h4' sx={{fontWeight: 500}}>Technologies:</StyledTypography>
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
                    {highlightedTechnologies.map((tech, idx) => (
                        <Chip 
                            key={idx}
                            icon={getIcon(tech)} 
                            label={tech} 
                            variant="filled" 
                            color='secondary'
                            sx={{ margin: '2px', marginY: '5px', padding: '2px' }} 
                        />
                    ))}
                </Box>
                
                {/* Highlights */}
                <Box item xs={12} component={Grid}>
                    <StyledTypography variant="h6">Highlights</StyledTypography>
                    {/* ... other highlight components */}
                </Box>
            </Box>
    
            {/* Description */}
            <Box item xs={12} component={Grid}>
                <StyledTypography variant="h3" sx={{ textAlign: 'center' }}>Description</StyledTypography>
                <StyledTypography>
                    {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."}
                </StyledTypography>
            </Box>
        </Box>
    );
}
  
export default ProjectOverview;
