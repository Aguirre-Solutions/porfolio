import { Box, Card, CardContent } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider } from '../../utils/styledComponents';

const Skills = ({ theme, maxCardHeight, skillsRef, checks}) => {

  const [isMobile, isTablet, isLaptop, isDesktop] = checks;

  const fontSize = '18px'
  const margin = 2


  const skills = [
    "Javascript",
    "Typescript",
    "React",
    "NodeJs",
    "NoSQL databases",
    "ExpressJs",
    "Redux",
    "GIT",
  ]
  const languageSkills = [
    "Fluent (Native) English",
    "Fluent (Native) Spanish",
    "Intermediate French",
    "Beginner Russian"
  ];

  const softSkills = [
    "Technical Communication",
    "Problem Disaggregation",
    "Complex Problem Solving",
    "Cross-Functional Collaboration",
    "Project planning",
    "Customer Service",
    "Adaptability"
  ];

  return (
    <>
       <StyledTypography variant="h2" sx={{ textAlign: 'center' }}>
        Skills
      </StyledTypography>
      <Card
        elevation={5}
        sx={{
          backgroundColor: theme.palette.additional.lightPastelPink,
          padding: '10px',
          height: `${maxCardHeight}px`,	
        }}
        ref={skillsRef}
      >
        <CardContent>
          <StyledTypography
            variant={isDesktop ? 'h4' : isLaptop ?  'h5' : isTablet ? 'h5' : isMobile ? 'h4' :'h6'} 
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.error.main }}
          >
            Technical Skills
          </StyledTypography>
            <Box m={margin} >
              {skills.map((skill, idx) => (
                <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.additional.darkGrey, lineHeight:'.9em', marginBottom:'10px', fontSize: '20px' }}>
                  {isMobile ?  null :
                  <Box component={'span'}>•</Box>} {skill}
                </StyledTypography>
              ))}
            </Box>

         <StyledHorizontalDivider sx={{ mx:'auto', my:'20px' }} />

          <StyledTypography
            variant={isDesktop ? 'h4' : isLaptop ?  'h5' : isTablet ? 'h5' : isMobile ? 'h4' :'h6'} 
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.error.main }}
          >
            Languages
          </StyledTypography>
            <Box m={margin} >
              {languageSkills.map((skill, idx) => (
                <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.additional.darkGrey, lineHeight:'.9em', marginBottom:'10px', fontSize: '20px' }}>
                  {isMobile ?  null :
                  <Box component={'span'}>•</Box>} {skill}
                </StyledTypography>
              ))}
            </Box>
          <StyledHorizontalDivider sx={{ mx:'auto', my:'20px' }} />

          <StyledTypography
            variant={isDesktop ? 'h4' : isLaptop ?  'h5' : isTablet ? 'h5' : isMobile ? 'h4' :'h6'} 
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.error.main }}
          >
            Core Competencies
          </StyledTypography>
          <Box m={margin} >
              {softSkills.map((skill, idx) => (
              <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.additional.darkGrey, lineHeight:'.9em', marginBottom:'10px', fontSize: '20px' }}>
                {isMobile ?  null :
                <Box component={'span'}>•</Box>} {skill}
              </StyledTypography>
            ))}
          </Box>      
        </CardContent>
      </Card>
    </>
  );
}

export default Skills;
