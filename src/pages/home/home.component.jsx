import { useContext, useState, useEffect } from "react";
import { ThemeValuesContext } from "../../context/theme-values.context";

import { Box, Grid } from "@mui/material";
import { StyledHorizontalDivider } from "../../utils/styledComponents";

import Portfolio from "../portfolio/portfolio.component";
import Brief from "../brief/brief.component";
import CV from "../cv/cv.component";

import { getCardHeight } from "../../utils/deviceHelpers";

const Home = () => {
  const { theme, checks } = useContext(ThemeValuesContext);

  const { isMobile, isTablet, isLaptop, isDesktop } = checks;

  const [cardHeight, setCardHeight] = useState(1050);

  useEffect(() => {
    const height = getCardHeight(isMobile, isTablet, isLaptop, isDesktop);
    setCardHeight(height);
  }, [checks]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ marginBottom: "30px" }}
    >
      <Brief theme={theme} checks={checks} />

      <Box
        component={Grid}
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StyledHorizontalDivider sx={{ width: "80%" }} checks={checks} />
      </Box>

      <Portfolio theme={theme} checks={checks} />

      <Box
        component={Grid}
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StyledHorizontalDivider sx={{ width: "80%" }} />
      </Box>
      <CV theme={theme} cardHeight={cardHeight} checks={checks} />
    </Grid>
  );
};

export default Home;
