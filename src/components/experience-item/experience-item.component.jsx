import { ListItem, Box, useMediaQuery} from "@mui/material"
import { StyledTypography } from "../../utils/styledComponents"

const ExperienceItem = ({ title, organization, duration, description, theme, checks }) => {

  const {isMobile, isTablet, isLaptop, isDesktop} = checks;

  return (
      <ListItem alignItems="flex-start">
        <Box>
          <StyledTypography 
            variant={isDesktop ? 'h5' : isLaptop ?  'h6' : isTablet ? 'h6' : isMobile ? 'h5' :'h7'} 
            sx={{ color: theme.palette.error.main, fontWeight: 600 }}>
            {title}
          </StyledTypography>
          <StyledTypography 
            variant={isDesktop ? 'h6' : isLaptop ?  'h7' : isTablet ? 'h7' : isMobile ? 'h6' :'h8'} 
            sx={{ color: theme.palette.warning.main, fontWeight:'bold' }}>
            {organization ? organization + ' • ' : ''}{duration}
          </StyledTypography>

          <Box mt={2}>
            {description.map((desc, idx) => (
              <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.additional.darkGrey, lineHeight:'.9em', marginBottom:'10px', fontSize: '20px' }}>
                {isMobile ?  null :
                <Box component={'span'}>•</Box>} {desc}
              </StyledTypography>
            ))}
          </Box>
        </Box>
      </ListItem>
  );
}

export default ExperienceItem;