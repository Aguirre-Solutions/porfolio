import { ListItem, Box, useMediaQuery} from "@mui/material"
import { StyledTypography } from "../../utils/styledComponents"

const ExperienceItem = ({ title, organization, duration, description, theme }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  return (
      <ListItem alignItems="flex-start">
        <Box>
          <StyledTypography variant="h4" sx={{ color: theme.palette.error.main, fontWeight: 600 }}>{title}</StyledTypography>
          <StyledTypography variant="h5" sx={{ color: theme.palette.additional.deepPurple, fontWeight:'bold' }}>
            {organization ? organization + ' • ' : ''}{duration}
          </StyledTypography>

          <Box mt={2}>
            {description.map((desc, idx) => (
              <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.info.main, lineHeight:'.9em', marginBottom:'10px', fontSize: '20px' }}>
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