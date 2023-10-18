import { Box, Card, CardContent, useMediaQuery } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider } from '../../utils/styledComponents';

const Skills = ({ theme }) => {

  const fontSize = '18px'


  const skills = [
    "Javascript",
    "Typescript",
    "NodeJS",
    "ExpressJS",
    "NoSQL databases",
    "ReactJS",
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
    <Box mt={3}>
      <StyledTypography variant="h2" sx={{ textAlign: 'center' }}>
        Skills
      </StyledTypography>

      <Card
        elevation={5}
        sx={{
          backgroundColor: theme.palette.additional.lightPastelPink,
          padding: '10px',
        }}
      >
        <CardContent>
          <StyledTypography
            variant="h4"
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.additional.darkGrey, paddingTop: fontSize }}
          >
            Technical Skills
          </StyledTypography>
          <StyledTypography variant="body1" gutterBottom sx={{fontSize:fontSize}}>

            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
         </StyledTypography>

          <StyledTypography
            variant="h4"
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.additional.darkGrey, paddingTop: fontSize }}
          >
            Languages
          </StyledTypography>
          <StyledTypography variant="body1" gutterBottom sx={{fontSize:fontSize}}>
            <ul>
              {languageSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </StyledTypography>

          <StyledTypography
            variant="h4"
            gutterBottom
            fontWeight={900}
            sx={{ color: theme.palette.additional.darkGrey, paddingTop: fontSize }}
          >
            Core Competencies
          </StyledTypography>
          <StyledTypography variant="body1" gutterBottom sx={{fontSize:fontSize}}>
            <ul>
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>            
          </StyledTypography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Skills;
