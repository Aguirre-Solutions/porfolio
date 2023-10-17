import { Box, Card, CardContent, List, useMediaQuery } from '@mui/material';
import { StyledTypography, StyledHorizontalDivider } from '../../utils/styledComponents';
import ExperienceItem from '../experience-item/experience-item.component';
import EducationItem from '../education-item/education-item.component';


const Experience = ({theme}) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <>
        <Box mb={3}>
        <StyledTypography variant="h1" sx={{textAlign:'center'}}>Resumé</StyledTypography>
        </Box>
        <Card elevation={12} sx={{backgroundColor: theme.palette.additional.lightPastelPink, paddingLeft: isMobile ? '0px' : '30px'}}> 
          <CardContent >
            <StyledTypography variant="h4" gutterBottom fontWeight={900} sx={{color: theme.palette.additional.darkGrey, paddingTop:'20px'}} >
              Experience
            </StyledTypography>
            <List>
              <ExperienceItem
                theme={theme}
                title="English as a Second Language Teacher"
                organization="Harmon Hall"
                duration="October 2013 – 2016"
                description={[
                  "Taught every English level to different age groups in groups ranging from 5 to 20 people.",
                  "Specialized in teaching conversational English and TOEFL Prep courses.",
                ]}
              />
              <StyledHorizontalDivider variant="inset" component="li" sx={{width:'80%'}} />
              <ExperienceItem
                theme={theme}
                title="Community Center"
                organization="IEST"
                duration="August 2014 – 2017"
                description={[
                  "Started as a therapist in speech therapy, later moving on to psychotherapy with 4600 hours of therapy.",
                  "Designed and carried out workshops related to parent's school, sexuality, and coping mechanisms for teens.",
                ]}
              />
              <StyledHorizontalDivider variant="inset" component="li" sx={{width:'80%'}} />
              <ExperienceItem
                theme={theme}
                title="Freelance Translator / Interpreter"
                duration="October 2015 – Present"
                description={[
                  "Worked as a translator in various sectors including real estate contracts, legal documents, and marketing campaigns.",
                  "Served as a simultaneous interpreter in the aforementioned sectors.",
                ]}
              />
              <StyledHorizontalDivider variant="inset" component="li"  sx={{width:'80%'}} />
              <ExperienceItem
                theme={theme}
                title="Owner"
                organization="Melifluent"
                duration="August 2016 – Present"
                description={[
                  "Managed a 5-person team, including scheduling sessions across many timezones for over 50 students and handling payroll and bonuses",
                  "Designed and successfully implemented a multi-language learning program over 7 years.",
                  "Worked as a community manager.",
                  "Led a marketing campaign for international student outreach during the COVID-19 pandemic.",
                  "Trained teachers in language-teaching skills and technical skills for Melifluent's online method.",
                ]}
              />
            </List>
    
            <StyledTypography variant="h5" gutterBottom style={{ marginTop: '20px' }} fontWeight={900}>
              Education
            </StyledTypography>
            <List>
              <EducationItem
                theme={theme}
                degree="Bachelor’s Degree in Psychology"
                institution="Instituto de Estudios Superiores de Tamaulipas"
                graduationDate="May 2016"
              />
              <EducationItem
                theme={theme}
                degree="Clinical Psychology Specialty"
                institution="Instituto de Estudios Superiores de Tamaulipas"
                graduationDate="May 2017"
              />
            </List>
          </CardContent>
        </Card>
      </>
      );
    }

export default Experience;