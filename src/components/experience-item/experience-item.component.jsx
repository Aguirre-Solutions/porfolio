import { ListItem, Box, useTheme } from "@mui/material"
import { StyledTypography } from "../../utils/styledComponents"

const ExperienceItem = ({ title, organization, duration, description }) => {
  const theme = useTheme();

  return (
      <ListItem alignItems="flex-start">
        <Box>
          <StyledTypography variant="h5" sx={{ color: theme.palette.error.main, fontWeight: 600 }}>{title}</StyledTypography>
          <StyledTypography variant="subtitle1" sx={{ color: theme.palette.additional.deepPurple, fontWeight:'bold', paddingLeft:'10px' }}>
            {organization ? organization + ' • ' : ''}{duration}
          </StyledTypography>

          <Box mt={2}>
            {description.map((desc, idx) => (
              <StyledTypography key={idx} variant="body" paragraph sx={{ color: theme.palette.info.main, lineHeight:'.9em', marginBottom:'10px', fontSize: '18px', paddingLeft:'20px' }}>
                • {desc}
              </StyledTypography>
            ))}
          </Box>
        </Box>
      </ListItem>
  );
}

export default ExperienceItem;