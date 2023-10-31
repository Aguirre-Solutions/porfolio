import {  Box, Chip, Grid } from '@mui/material'
import { StyledTypography, StyledLink, StyledVerticalDivider, StyledHorizontalDivider } from '../../utils/styledComponents'


const ProjectOverview = ({ project, technologyIcons, checks, theme }) => {

    const { isMobile, isTablet } = checks;
    const { title, image, link, githubLink, highlightedTechnologies, description, setup, usage, contributions, license } = project

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
            <Box component={Grid} container spacing={3}>
                <Box item xs={12} mt={2}>
                    <StyledTypography variant="h3" sx={{textAlign:'center'}}>Description</StyledTypography>
                    {description.map((paragraph, index) => (
                        <StyledTypography key={index} paragraph>
                            {paragraph}
                        </StyledTypography>
                    ))}
                </Box>

                 {/* Usage Information */}
                 <Box item xs={12}>
                    <StyledTypography variant="h5">Usage</StyledTypography>
                    {Object.entries(usage).map(([key, value], index) => (
                    <StyledTypography key={index} paragraph>
                        <strong>
                        {key
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, function(str) { return str.toUpperCase(); })
                            .trim()}:
                        </strong> {value}
                    </StyledTypography>
                    ))}

                </Box>



                {/* Setup Instructions */}
                <Box item xs={12}>
                    <StyledTypography variant="h5">Setup</StyledTypography>
                    <StyledTypography>Dependencies: {setup.dependencies}</StyledTypography>
                    <StyledTypography>Dev Server: {setup.devServer}</StyledTypography>
                    <StyledTypography>Frontend: {setup.frontend}</StyledTypography>
                    <StyledTypography>Live Build: {setup.liveBuild}</StyledTypography>
                    {setup.notes.map((note, index) => (
                        <StyledTypography key={index} paragraph>
                            {note}
                        </StyledTypography>
                    ))}
                </Box>

               
                {/* Contributions and License */}
                <Box item xs={12}>
                    <StyledTypography variant="h5">Contributions</StyledTypography>
                    <StyledTypography paragraph>{contributions}</StyledTypography>
                    <StyledTypography variant="h5">License</StyledTypography>
                    <StyledTypography paragraph>{license}</StyledTypography>
                </Box>
            </Box>
        </Box>
    );
}
  
export default ProjectOverview;
