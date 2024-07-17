import { Fragment, useEffect, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography, Toolbar } from "@mui/material";
import {
  StyledToolbar,
  StyledRouterLink,
  StyledAppBar,
} from "../../utils/styledComponents";
import { ThemeValuesContext } from "../../context/theme-values.context";

const Navigation = () => {
  const { theme, checks } = useContext(ThemeValuesContext);

  const { isMobile } = checks;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newIsScrolled = window.scrollY > 10;
      if (newIsScrolled !== isScrolled) {
        setIsScrolled(newIsScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <Fragment>
      <StyledAppBar
        position="fixed"
        style={{
          height: "48px",
          boxShadow: isScrolled ? theme.shadows[5] : "none",
          backgroundColor: isScrolled
            ? theme.palette.primary.main
            : "transparent",
          transition: "background-color 0.5s",
        }}
      >
        <StyledToolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3" noWrap component="div">
              <StyledRouterLink
                to="/"
                sx={{
                  color: isScrolled
                    ? theme.palette.common.white
                    : theme.palette.secondary.main,
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Home
              </StyledRouterLink>
            </Typography>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
