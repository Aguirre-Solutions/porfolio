import { ListItem, useMediaQuery, Box, Grid } from "@mui/material";
import { StyledTypography } from "../../utils/styledComponents";

const EducationItem = ({ degree, institution, graduationDate, theme }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ListItem>
      <Grid container spacing={2} alignItems="center"> {/* Added alignItems prop */}
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography variant="h5" sx={{ color: theme.palette.error.main, fontWeight: 'bold' }}>
              {degree}
            </StyledTypography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%"> {/* Flexbox styling */}
            <StyledTypography variant="h6" sx={{ color: theme.palette.warning.main, fontWeight: 'bold' }}>
              {institution}
            </StyledTypography>
            <StyledTypography variant="body2" sx={{ color: theme.palette.additional.deepPurple, fontWeight: 600 }}> {/* Adjusted variant for date */}
            {isMobile ?  null :
                <Box component={'span'}>•</Box>} {graduationDate}
            </StyledTypography>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default EducationItem;
