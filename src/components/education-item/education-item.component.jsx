import { ListItem, Box, Grid } from "@mui/material";
import { StyledTypography } from "../../utils/styledComponents";

const EducationItem = ({ degree, institution, graduationDate, theme, checks }) => {

  const {isMobile, isTablet, isLaptop, isDesktop} = checks;


  return (
    <ListItem>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <StyledTypography 
            variant={isDesktop ? 'h5' : isLaptop ?  'h6' : isTablet ? 'h6' : isMobile ? 'h5' :'h7'} 
            sx={{ color: theme.palette.warning.main, fontWeight: 'bold' }}>
              {degree}
            </StyledTypography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" justifyContent="center" height="100%"> 
            <StyledTypography 
            variant={isDesktop ? 'h6' : isLaptop ?  'h7' : isTablet ? 'h7' : isMobile ? 'h6' :'h8'} 
            sx={{ color: theme.palette.additional.deepPurple, fontWeight: 'bold' }}>
              {institution}
            </StyledTypography>
            <StyledTypography variant="body2" sx={{ color: theme.palette.primary.contrastText, fontWeight: 600 }}>
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
