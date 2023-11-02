import {  Box, Chip, Grid } from '@mui/material'
import { StyledTypography, StyledLink, StyledVerticalDivider, StyledHorizontalDivider, StyledChip } from '../../utils/styledComponents'


const ProjectOverview = ({ project, technologyIcons, checks, theme }) => {

    const { isMobile, isTablet, isLaptop, isDesktop } = checks;
    const { title, image, link, githubLink, highlightedTechnologies, description, setup, usage, contributions, license } = project

    const getIcon = (tech) => {
        return technologyIcons[tech];
    }

    return (
        <Box container component={Grid} spacing={3}  alignItems="center" xs={12} md={9} sx={{margin: '0 auto'}}>
            {/* Left Side - Image */}
            <Box item xs={12} lg={5} component={Grid}>
                <img src={image} alt={title} style={{ width: '100%' }} />
            </Box>
           
            {isTablet ? 
            <Box item xs={12} lg={1} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider sx={{ width:'80%' }} checks={checks} />
             </Box>
            :
            <Box item xs={false} lg={1} component={Grid} ml={isTablet ? 3 : 0} display="flex" justifyContent="center" alignItems="center">
                <StyledVerticalDivider checks={checks} />
            </Box>
            }
    
            {/* Right Side */}
            <Box item xs={12} lg={5} component={Grid}>
                {/* Title */}
                <StyledTypography variant={isDesktop ? 'h3' : 'h4'} sx={{textAlign: isLaptop ? 'center' : 'center'}}>{title}</StyledTypography>
                
                {/* Links */}
                <Box sx={{ padding: '10px', margin: '5px 0' }}>
                    <StyledTypography sx={{fontWeight:'500'}}>
                    <strong>Web Page:</strong> 
                        <StyledLink href={link} sx={{color:theme.palette.primary.main, fontWeight: 900, marginLeft:'0.5em'}}>{link}</StyledLink>
                    </StyledTypography>
                </Box>
                <Box sx={{ padding: '10px', margin: '5px 0' }}>
                    <StyledTypography sx={{fontWeight:'500'}}>
                        <strong>Github:</strong> 
                        <StyledLink href={githubLink} sx={{color:theme.palette.primary.main, fontWeight: 900, marginLeft:'0.5em'}}>{githubLink}</StyledLink>
                    </StyledTypography>
                </Box>

                {/* Tech Stack */}
                <StyledTypography variant='h6' sx={{fontWeight: 500}}>Technologies:</StyledTypography>
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
                        <StyledChip 
                            key={idx}
                            icon={getIcon(tech)} 
                            label={tech} 
                        />
                    ))}
                </Box>
                
                {/* Highlights */}
                <Box item xs={12} component={Grid}>
                    <StyledTypography variant="h6">Highlights</StyledTypography>
                </Box>
            </Box>

            <Box item xs={12} md={12} component={Grid} display="flex" justifyContent="center">
                <StyledHorizontalDivider checks={checks} sx={{marginBottom:'30px'}} />
             </Box>
    
            {/* Description */}
            <Box component={Grid} container spacing={2}>
                <Box component={Grid}  item xs={12} mt={2}>
                    <StyledTypography variant="h4" sx={{textAlign:'center', marginBottom: '20px'}}>Description</StyledTypography>
                    {description.map((paragraph, index) => (
                        <StyledTypography key={index} paragraph>
                            {paragraph}
                        </StyledTypography>
                    ))}
                </Box>

                 {/* Usage Information */}
                 <Box component={Grid}  item xs={12} md={6}>
                    <StyledTypography variant="h4" sx={{textAlign:'center', marginBottom: '10px'}}>Usage</StyledTypography>
                    {Object.entries(usage).map(([key, value], index) => (
                    <StyledTypography key={index} paragraph sx={{lineHeight:'1em'}}>
                        <strong>
                        {key
                            .replace(/([A-Z])/g, ' $1') // insert a space before all caps. $1 is the first match of the regex. A-Z is any capital letter in the string, /g is a global flag to tell it to search through the whole string
                            .replace(/^./, function(str) { return str.toUpperCase(); }) // uppercase the first character
                            .trim() //trim any whitespace
                        }: 
                        </strong> {value}
                    </StyledTypography>
                    ))}

                </Box>



                {/* Setup Instructions */}
                <Box component={Grid}  item xs={12} md={6}>
                    <StyledTypography variant="h4" sx={{textAlign:'center', marginBottom: '10px'}} >Setup</StyledTypography>
                    <StyledTypography><strong>Dependencies:</strong> {setup.dependencies}</StyledTypography>
                    <StyledTypography><strong>Dev Server:</strong> {setup.devServer}</StyledTypography>
                    <StyledTypography><strong>Frontend:</strong> {setup.frontend}</StyledTypography>
                    <StyledTypography><strong>Live Build:</strong> {setup.liveBuild}</StyledTypography>
                    <Box sx={{marginTop:'5px'}}>
                    <StyledTypography variant="h6" sx={{textAlign:'center'}}>  Notes: </StyledTypography>
                    {setup.notes.map((note, index) => (
                        <StyledTypography key={index} paragraph>
                            {note}
                        </StyledTypography>
                    ))}
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
  
export default ProjectOverview;
