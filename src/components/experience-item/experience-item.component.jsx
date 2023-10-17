import { ListItem, Box, useMediaQuery} from "@mui/material"
import { StyledTypography } from "../../utils/styledComponents"

const ExperienceItem = ({ title, organization, duration, description, theme }) => {

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
      <ListItem alignItems="flex-start">
        <Box>
          <StyledTypography variant="h5" sx={{ color: theme.palette.error.main, fontWeight: 600 }}>{title}</StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.additional.deepPurple, fontWeight:'bold', paddingLeft: isMobile ? '0px' : '10px' }}>
            {organization ? organization + ' • ' : ''}{duration}
          </StyledTypography>

          <Box mt={2}>
            {description.map((desc, idx) => (
              <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.info.main, lineHeight:'.9em', marginBottom:'10px', fontSize: '18px', paddingLeft: isMobile ? '0px' :'20px' }}>
                • {desc}
              </StyledTypography>
            ))}
          </Box>
        </Box>
      </ListItem>
  );
}

export default ExperienceItem;