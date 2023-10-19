import { Box, Card, CardContent, useMediaQuery } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider } from '../../utils/styledComponents';

const Skills = ({ theme }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      <Box>
      <StyledTypography variant="h2" sx={{ textAlign: 'center' }}>
        Skills
      </StyledTypography>
      </Box>

      <Card
        elevation={5}
        sx={{
          backgroundColor: theme.palette.additional.lightPastelPink,
          padding: '10px',
          minHeight: '842px',
        
        }}
      >
        <CardContent>
          <StyledTypography
            variant="h4"
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
            variant="h4"
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
            variant="h4"
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
