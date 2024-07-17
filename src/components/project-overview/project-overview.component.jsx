import { Box, Chip, Grid } from "@mui/material";
import {
  StyledTypography,
  StyledLink,
  StyledVerticalDivider,
  StyledHorizontalDivider,
  StyledChip,
} from "../../utils/styledComponents";

const ProjectOverview = ({ project, technologyIcons, checks, theme }) => {
  const { isMobile, isTablet, isLaptop, isDesktop } = checks;
  const {
    title,
    image,
    link,
    githubLink,
    highlightedTechnologies,
    description,
    setup,
    usage,
  } = project;

  const getIcon = (tech) => {
    return technologyIcons[tech];
  };

  return (
    <>
      {/* Left Side - Image */}
      <Grid item xs={12} lg={5} display="flex" justifyContent="center">
        <img
          src={image}
          style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px" }}
        />
      </Grid>

      {isTablet ? (
        <Grid item xs={12} display="flex" justifyContent="center">
          <StyledHorizontalDivider sx={{ width: "80%" }} checks={checks} />
        </Grid>
      ) : (
        <Grid
          item
          xs={false}
          lg={1}
          ml={isTablet ? 3 : 0}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StyledVerticalDivider checks={checks} />
        </Grid>
      )}

      {/* Right Side */}
      <Grid item xs={12} lg={5} component={Grid}>
        {/* Title */}
        <StyledTypography
          variant={isDesktop ? "h3" : "h4"}
          sx={{ textAlign: isLaptop ? "center" : "center" }}
        >
          {title}
        </StyledTypography>

        {/* Links */}
        <Box>
          <StyledTypography sx={{ fontWeight: "500" }}>
            Web Page:
          </StyledTypography>
          <StyledLink
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.main, fontWeight: 900 }}
          >
            {link}
          </StyledLink>
        </Box>
        <Box>
          <StyledTypography sx={{ fontWeight: "500" }}>
            Github:
          </StyledTypography>
          <StyledLink
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.primary.main, fontWeight: 900 }}
          >
            {githubLink}
          </StyledLink>
        </Box>

        {/* Tech Stack */}
        <StyledTypography variant="h6" sx={{ fontWeight: 500 }}>
          Technologies:
        </StyledTypography>
        <Box
          sx={{
            marginTop: "10px",
            display: "flex",
            justifyContent: isMobile || isTablet ? "center" : "flex-start",
            flexWrap: "wrap",
            alignContent: isMobile || isTablet ? "center" : "flex-start",
            flexDirection: "row",
            gap: 0,
          }}
        >
          {highlightedTechnologies.map((tech, idx) => (
            <StyledChip key={idx} icon={getIcon(tech)} label={tech} />
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} display="block" justifyContent="space-between">
        <StyledHorizontalDivider
          checks={checks}
          sx={{ marginBottom: "30px" }}
        />
      </Grid>

      {/* Description */}
      <Box component={Grid} container spacing={2}>
        <Box component={Grid} item xs={12} mt={2}>
          <StyledTypography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Description
          </StyledTypography>
          {description.map((paragraph, index) => (
            <StyledTypography
              key={index}
              paragraph
              sx={{ textAlign: "center" }}
            >
              {paragraph}
            </StyledTypography>
          ))}
        </Box>

        {/* Usage Information */}
        <Grid item xs={12} md={6}>
          <StyledTypography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            Usage
          </StyledTypography>
          {Object.entries(usage).map(([key, value], index) => (
            <StyledTypography key={index} paragraph sx={{ lineHeight: "1em" }}>
              <strong>
                {
                  key
                    .replace(/([A-Z])/g, " $1") // insert a space before all caps. $1 is the first match of the regex. A-Z is any capital letter in the string, /g is a global flag to tell it to search through the whole string
                    .replace(/^./, function (str) {
                      return str.toUpperCase();
                    }) // uppercase the first character
                    .trim() //trim any whitespace
                }
                :
              </strong>{" "}
              {value}
            </StyledTypography>
          ))}
        </Grid>

        {/* Setup Instructions */}
        <Grid item xs={12} md={6}>
          <StyledTypography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: "10px" }}
          >
            Setup
          </StyledTypography>
          <StyledTypography>
            <strong>Dependencies:</strong> {setup.dependencies}
          </StyledTypography>
          <StyledTypography>
            <strong>Dev Server:</strong> {setup.devServer}
          </StyledTypography>
          <StyledTypography>
            <strong>Frontend:</strong> {setup.frontend}
          </StyledTypography>
          <StyledTypography>
            <strong>Live Build:</strong> {setup.liveBuild}
          </StyledTypography>
          <Box sx={{ marginTop: "5px" }}>
            <StyledTypography variant="h6" sx={{ textAlign: "center" }}>
              {" "}
              Notes:{" "}
            </StyledTypography>
            {setup.notes.map((note, index) => (
              <StyledTypography key={index} paragraph>
                {note}
              </StyledTypography>
            ))}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ProjectOverview;
